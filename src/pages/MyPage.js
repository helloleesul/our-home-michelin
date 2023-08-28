import React, { useState, useEffect } from "react";
import * as S from "./MyPage.style";
import BasicProfileImg from "../assets/img/BasicProfileImg.png";
import PortalModal from "../components/common/PortalModal";
import ModalBox from "../components/common/ModalBox";
import axios from "axios";
function MyPage(props) {
  const [showModal, setShowModal] = useState(false);
  const [tabColor, settabColor] = useState("myRecipes");
  const [titleColor, setTitleClor] = useState("전체");
  const [nickname, setNickname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [rank, setRank] = useState("");
  const [recipes, setRecipes] = useState([]);
  const recipeTypesCount = {};
  recipes.forEach((recipe) => {
    if (recipeTypesCount[recipe.recipeType]) {
      recipeTypesCount[recipe.recipeType]++;
    } else {
      recipeTypesCount[recipe.recipeType] = 1;
    }
  });

  console.log(recipeTypesCount);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/myinfo");
        setNickname(response.data.nickName);
        setUserEmail(response.data.email);
        setRank(response.role);

        const responseRecipe = await axios.get("/api/myrecipes");
        setRecipes(responseRecipe.data);
        console.log(responseRecipe.data);
      } catch (error) {
        console.log(error.response.data.error);
      }
    })();
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleImg = () => {
    alert("dlalwlzmfflr");
    //여기서 이미지를 파일에서 선택해서 넣게하고싶어 그리고 api 이미지 넘기기
  };
  const handleTapButton = (check) => {
    //북마크 레시피 클릭시 북마크 레시피 리스트 보여주고 나의 레시피 클릭시 나의레시피 리스트보여주기
    settabColor(check);
  };
  const handleTitleText = (check) => {
    // 텍스트에 맞게 필터링 하ㄱ기
    setTitleClor(check);
    alert("xkdlxmfxrtmxm");
  };

  const handleRecipeCard = (tab) => {
    // 클릭한 레시피 수정페이지 이동
    alert("레시피");
  };
  const handlePaginationButton = (i) => {
    // 레시피 카운트가 100개면 1~20 , 20~40
    alert(i, "클릭");
  };
  const totalPages = Math.ceil(recipes.length / 20);
  const pageButtons = [];

  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <S.PaginationButton key={i} onClick={() => handlePaginationButton(i)}>
        {i}
      </S.PaginationButton>
    );
  }
  return (
    <>
      <PortalModal handleShowModal={showModal} size={"35%"}>
        <ModalBox closeModal={closeModal} text="회원정보 수정"></ModalBox>
      </PortalModal>
      <S.Container>
        <S.UserContainer>
          <S.ProfileImg
            onClick={handleImg}
            src={BasicProfileImg}
            alt="프로필 이미지"
          />
          <S.InfoContainer>
            <S.Text>{nickname}(닉네임)</S.Text>
            <S.Text>{userEmail} (이메일)</S.Text>
            <S.Button onClick={() => setShowModal(true)}>
              회원정보 수정
            </S.Button>
          </S.InfoContainer>
          <S.GradeContainer>
            <S.TextContainer>
              <S.Text fontSize="35px" color={rank === 1 ? "orange" : "green"}>
                {rank === 1 ? "에디터" : "일반"}
              </S.Text>
              <S.Text>회원등급</S.Text>
            </S.TextContainer>
          </S.GradeContainer>
        </S.UserContainer>
      </S.Container>
      <S.RecipeBoxContainer>
        <S.TabsContainer>
          <S.TabButton
            onClick={() => handleTapButton("myRecipes")}
            isActive={tabColor === "myRecipes"}
          >
            나의 레시피
          </S.TabButton>
          <S.TabButton
            onClick={() => handleTapButton("bookmarkRecipes")}
            isActive={tabColor === "bookmarkRecipes"}
          >
            북마크 레시피
          </S.TabButton>
          <S.TabButton
            onClick={() => handleTapButton("likedRecipes")}
            isActive={tabColor === "likedRecipes"}
          >
            좋아요 레시피
          </S.TabButton>
        </S.TabsContainer>
        <S.RecipeContainer>
          <S.countContainer>
            <S.allCount>
              <S.conterTitleText
                onClick={() => handleTitleText("전체")}
                isActive={titleColor === "전체"}
              >
                전체
              </S.conterTitleText>
              {recipes.length}
            </S.allCount>
            <S.menuCount>
              {recipes.map((recipe, index) => (
                <S.menuCountBox key={index}>
                  <S.conterTitleText
                    onClick={() => handleTitleText(recipe.recipeType)}
                    isActive={titleColor === recipe.recipeType}
                  >
                    {recipe.recipeType}
                  </S.conterTitleText>{" "}
                  <span>{recipeTypesCount[recipe.recipeType]}</span>
                </S.menuCountBox>
              ))}
            </S.menuCount>
          </S.countContainer>
          <S.RecipeList>
            {recipes.map((recipe, index) => (
              <S.RecipeItemBox key={index}>
                <S.RecipeImg
                  onClick={() => handleRecipeCard(recipe)}
                  src={recipe.imageUrl}
                  alt={`레시피 이미지 ${index + 1}`}
                />
                <S.RecipeText>{recipe.title}</S.RecipeText>
              </S.RecipeItemBox>
            ))}
          </S.RecipeList>
          <S.Pagination>
            {/* {Array.from({ length: Math.ceil(dummyRecipes.length / 20) }).map(
              (_, index) => (
                <S.PaginationButton
                  key={index}
                  onClick={() => handlePaginationButton(index + 1)}
                >
                  {index + 1}
                </S.PaginationButton>
              )
            )} */}
            {pageButtons}
          </S.Pagination>
        </S.RecipeContainer>
      </S.RecipeBoxContainer>
    </>
  );
}

export default MyPage;
