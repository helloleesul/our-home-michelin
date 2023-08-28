import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  const inputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const recipeTypesCount = [];
  const [selectedType, setSelectedType] = useState("전체");

  const navigate = useNavigate();
  const filteredRecipes =
    selectedType === "전체"
      ? recipes
      : recipes.filter((recipe) => recipe.recipeType === selectedType);

  console.log("필터된 레시피", filteredRecipes);
  recipes.forEach((recipe) => {
    if (recipeTypesCount[recipe.recipeType]) {
      recipeTypesCount[recipe.recipeType]++;
    } else {
      recipeTypesCount[recipe.recipeType] = 1;
    }
  });
  const totalPages = Math.ceil(filteredRecipes.length / 20);
  const pageButtons = [];

  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <S.PaginationButton key={i} onClick={() => handlePaginationButton(i)}>
        {i}
      </S.PaginationButton>
    );
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/myinfo");
        setNickname(response.data.nickName);
        setUserEmail(response.data.email);
        setRank(response.role);
        setSelectedImage(response.profileImageURL);
        console.log("유저정보 조회데이터", response);
        const responseRecipe = await axios.get("/api/myrecipes");
        setRecipes(responseRecipe.data);
        console.log("레시피 조회데이터", responseRecipe.data);
      } catch (error) {
        console.log(error.response.data.error);
      }
    })();
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleImg = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      // api 이미지 넘기는 api 연결
      // const formData = new FormData();
      // formData.append("profileImage", file);
    }
  };
  const handleTapButton = (check) => {
    //북마크 레시피 클릭시 북마크 레시피 리스트 보여주고 나의 레시피 클릭시 나의레시피 리스트보여주기
    settabColor(check);
  };
  const handleTitleText = (check) => {
    setSelectedType(check);
    console.log(totalPages);
    setTitleClor(check);
  };

  const handleRecipeImg = (id) => {
    navigate(`/recipe/${id}`);
    console.log("레시피 아이디", id);
  };
  const handlePaginationButton = (i) => {
    // 레시피 카운트가 100개면 1~20 , 20~40
    alert(i, "클릭");
  };

  return (
    <>
      <PortalModal handleShowModal={showModal} size={"35%"}>
        <ModalBox closeModal={closeModal} text="회원정보 수정"></ModalBox>
      </PortalModal>
      <S.Container>
        <S.UserContainer>
          <S.ProfileImg
            onClick={() => inputRef.current.click()}
            src={selectedImage || BasicProfileImg}
          />
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleImg}
            ref={inputRef}
          />
          <S.InfoContainer>
            <S.Text>{nickname} (닉네임)</S.Text>
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
              {Object.keys(recipeTypesCount).map((recipeType, index) => (
                <S.menuCountBox key={index}>
                  <S.conterTitleText
                    onClick={() => handleTitleText(recipeType)}
                    isActive={titleColor === recipeType}
                  >
                    {recipeType}
                  </S.conterTitleText>{" "}
                  <span>{recipeTypesCount[recipeType]}</span>
                </S.menuCountBox>
              ))}
            </S.menuCount>
          </S.countContainer>
          <S.RecipeList>
            {filteredRecipes.length === 0
              ? recipes.map((recipe, index) => (
                  <S.RecipeItemBox key={index}>
                    <S.RecipeImg
                      onClick={() => handleRecipeImg(recipe._id)}
                      src={recipe.imageUrl}
                      alt={`레시피 이미지 ${index + 1}`}
                    />
                    <S.RecipeText>{recipe.title}</S.RecipeText>
                  </S.RecipeItemBox>
                ))
              : filteredRecipes.map((recipe, index) => (
                  <S.RecipeItemBox key={index}>
                    <S.RecipeImg
                      onClick={() => handleRecipeImg(recipe._id)}
                      src={recipe.imageUrl}
                      alt={`레시피 이미지 ${index + 1}`}
                    />
                    <S.RecipeText>{recipe.title}</S.RecipeText>
                  </S.RecipeItemBox>
                ))}
          </S.RecipeList>
          {/* 지금 여기 버튼을   Math.ceil(filteredRecipes/20) */}
          <S.Pagination>{pageButtons}</S.Pagination>
        </S.RecipeContainer>
      </S.RecipeBoxContainer>
    </>
  );
}

export default MyPage;
