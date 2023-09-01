import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./MyPage.style";
import BasicProfileImg from "../assets/img/userDefaultImg.svg";
import PortalModal from "../components/common/PortalModal";
import ModalBox from "../components/common/ModalBox";
import requestApi from "../libs/const/api";
import { useDispatch } from "react-redux";
import { setLoading } from "../libs/utils/layoutSlice";

function MyPage() {
  const [showModal, setShowModal] = useState(false);
  const [tabColor, setTabColor] = useState("myRecipes");
  const [titleColor, setTitleColor] = useState("전체");
  const [nickname, setNickname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [rank, setRank] = useState("");
  const [recipes, setRecipes] = useState([]);
  const inputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedType, setSelectedType] = useState("전체");
  const [paginationResponse, setPaginationResponse] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [pageColor, setPageColor] = useState(1);
  const [pageButtons, setPageButtons] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filteredRecipes =
    selectedType === "전체"
      ? paginationResponse
      : recipes.filter((recipe) => recipe.recipeType === selectedType);

  const recipeTypesCount = useMemo(() => {
    const counts = {};
    recipes.forEach((recipe) => {
      if (counts[recipe.recipeType]) {
        counts[recipe.recipeType]++;
      } else {
        counts[recipe.recipeType] = 1;
      }
    });
    return counts;
  }, [recipes]);

  useEffect(() => {
    dispatch(setLoading(true));
    (async () => {
      try {
        const response = await requestApi("get", "/myinfo");
        setNickname(response.nickName);
        setUserEmail(response.email);
        setRank(response.role);
        setSelectedImage(response.profileImageURL);

        const responseRecipe = await requestApi("get", "/myrecipes");
        setRecipes(responseRecipe);

        const currentPage = 1;
        const perPage = 20;
        const paginationApiUrl = `/myrecipes/pagination?page=${currentPage}&perPage=${perPage}`;
        const paginationResponse = await requestApi("get", paginationApiUrl);
        setPaginationResponse(paginationResponse.myRecipes);
        setTotalPages(paginationResponse.totalPages);
        dispatch(setLoading(false));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    if (selectedType !== "전체") {
      setTotalPages(Math.ceil(recipeTypesCount[selectedType] / 20));
    } else {
      setTotalPages(Math.ceil(recipes.length / 20));
    }
  }, [selectedType, recipeTypesCount, recipes.length]);

  useEffect(() => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <S.PaginationButton
          key={i}
          isActive={i === pageColor}
          onClick={() => handlePaginationButton(i)}
        >
          {i}
        </S.PaginationButton>
      );
    }
    setPageButtons(buttons);
  }, [totalPages, pageColor]);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleImg = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const formData = new FormData();
      setSelectedImage(imageUrl);
      formData.append("profileImage", file);
      const response = await requestApi("patch", "/myinfo", formData);
      if (response) {
        alert("프로필 이미지 수정 완료");
      }
    }
  };

  const handleTapButton = (check) => {
    setTabColor(check);
  };

  const handleTitleText = (check) => {
    setSelectedType(check);
    setTitleColor(check);
  };

  const handleRecipeImg = (id) => {
    navigate(`/recipe/${id}`);
  };

  const handlePaginationButton = async (i) => {
    setPageColor(i);
    const currentPage = i;
    const perPage = 20;
    const paginationApiUrl = `/myrecipes/pagination?page=${currentPage}&perPage=${perPage}`;
    const paginationResponse = await requestApi("get", paginationApiUrl);
    setPaginationResponse(paginationResponse.myRecipes);
  };

  return (
    <>
      <PortalModal handleShowModal={showModal} size={"25%"}>
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
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImg}
            ref={inputRef}
          />
          <S.InfoContainer>
            <S.Text fontSize="18x">{nickname} (닉네임)</S.Text>
            <S.Text fontSize="18x">{userEmail} (이메일)</S.Text>
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
            <S.line></S.line>
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
            {filteredRecipes.map((recipe, index) => (
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
          <S.Pagination>{pageButtons}</S.Pagination>
        </S.RecipeContainer>
      </S.RecipeBoxContainer>
    </>
  );
}

export default MyPage;
