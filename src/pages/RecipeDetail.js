import React, { useEffect, useState } from "react";
import * as Detail from "./RecipeDetail.style";
import { FillHeart, StrokeHeart } from "../assets/HeartIcon";
// import { FillBookMark, StrokeBookMark } from "../assets/BookMarkIcon";
import { MAIN_THEME_COLOR } from "../libs/const/color";
import { Link, useNavigate, useParams } from "react-router-dom";
import requestApi from "../libs/const/api";
import PortalModal from "../components/common/PortalModal";
import { AlertBox } from "../components/common/PortalModal.style";
import CheckIcon from "../assets/CheckIcon";
import userDefaultImg from "../assets/img/userDefaultImg.svg";
import recipeDefaultImg from "../assets/img/recipeDefaultImg.png";
import useAuthStatus from "../libs/hooks/useAuthStatus";

function RecipeDetail() {
  const { detail } = useParams();
  const { isAuthUser } = useAuthStatus();
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isLike, setIsLike] = useState();

  useEffect(() => {
    getRecipeData();
  }, []);

  const getRecipeData = async () => {
    try {
      const response = await requestApi("get", `/recipes/${detail}`);
      // console.log(response);
      setRecipeData(response);
      getMyLikeRecipe(response._id);
    } catch (err) {}
  };

  const getMyLikeRecipe = async (id) => {
    try {
      const response = await requestApi("get", "/myinfo");
      const result = response.likeRecipes.find((recipe) => recipe === id);
      // console.log(response.likeRecipes, result, !result);
      if (isAuthUser !== undefined) {
        if (!result) {
          setIsLike(false);
        } else {
          setIsLike(true);
        }
      }
    } catch (err) {}
  };

  const handleRecipeDel = async () => {
    try {
      await requestApi("delete", `/recipes/${detail}`);
      setShowModal(false);
      navigate(-1);
    } catch (err) {}
  };

  const handleIsLike = async (id) => {
    try {
      await requestApi("post", "/toggleLikeRecipes", {
        recipeId: id,
      });
      getRecipeData();
    } catch (err) {}
  };

  return (
    <Detail.Wrap>
      <Detail.Box>
        {/* 에러났을 때 onError 기본 이미지로 설정 */}
        <img
          src={`/${recipeData.imageUrl}`}
          alt={recipeData.title}
          onError={(e) => {
            e.target.src = recipeDefaultImg;
          }}
        />
        <h3>
          <span>{recipeData.title}</span>
        </h3>
      </Detail.Box>
      <Detail.Owner>
        <div className="profile">
          {recipeData.writer?.role === 1 && (
            <span className="editorMark">
              <CheckIcon color={MAIN_THEME_COLOR[0]} />
            </span>
          )}
          <div className="imgBox">
            {/* 유저 프로필 이미지 추후 작업예정 */}
            <img src={userDefaultImg} alt={recipeData.writer?.nickName} />
          </div>
          <span className="nickName">
            {recipeData.writer?.role === 1 && (
              <span className="editorUser">에디터</span>
            )}
            {recipeData.writer?.nickName}
          </span>
        </div>
        <div className="buttons">
          <span>{recipeData.likeCount}</span>
          <button
            onClick={() =>
              isAuthUser !== undefined
                ? handleIsLike(recipeData._id)
                : alert("회원만 가능합니다.")
            }
          >
            {isAuthUser !== undefined ? (
              isLike ? (
                <FillHeart color={MAIN_THEME_COLOR[0]} />
              ) : (
                <StrokeHeart color={MAIN_THEME_COLOR[0]} />
              )
            ) : (
              <FillHeart color={MAIN_THEME_COLOR[0]} />
            )}
          </button>
          {/* <button>
            <StrokeBookMark color={MAIN_THEME_COLOR[0]} />
          </button> */}
        </div>
      </Detail.Owner>
      <Detail.Box className="shadow">
        <div>
          <Detail.BoxTitle>
            <h4>재료</h4>
            <span>{recipeData.recipeServing} 인분</span>
          </Detail.BoxTitle>
          <Detail.UnorderList>
            {recipeData.ingredients?.map((item) => {
              return (
                <li key={item._id}>
                  <span className="name">{item.name}</span>
                  <span className="line"></span>
                  <span className="weight">{item.amount}</span>
                </li>
              );
            })}
          </Detail.UnorderList>
        </div>
      </Detail.Box>
      <Detail.Box className="shadow">
        <div>
          <Detail.BoxTitle>
            <h4>요리과정</h4>
            <span>{recipeData.recipeType}</span>
          </Detail.BoxTitle>
          <Detail.OrderList>
            {recipeData?.process?.map((step, index) => {
              return (
                <li key={index}>
                  <span className="stepCount">{index + 1}</span>
                  <p>{step}</p>
                </li>
              );
            })}
          </Detail.OrderList>
        </div>
      </Detail.Box>
      {/* 유저가 작성한 글일 때에만 보이게하기 */}
      {recipeData.writer?._id === isAuthUser?._id && (
        <>
          <Detail.Buttons>
            <Link to="/recipe/write" className="editBtn">
              레시피 수정하기
            </Link>
            <button className="deleteBtn" onClick={() => setShowModal(true)}>
              삭제
            </button>
          </Detail.Buttons>
          <PortalModal handleShowModal={showModal} size={"30%"}>
            <AlertBox>
              <h3>레시피를 삭제하시겠습니까?</h3>
              <button className="cancelBtn" onClick={handleRecipeDel}>
                삭제
              </button>
              <button className="deleteBtn" onClick={() => setShowModal(false)}>
                취소
              </button>
            </AlertBox>
          </PortalModal>
        </>
      )}
    </Detail.Wrap>
  );
}

export default RecipeDetail;
