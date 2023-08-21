import React, { useState } from "react";
import PortalModal from "../components/common/PortalModal";
import MyFridge from "../components/MyFridge";
import * as Detail from "./RecipeDetail.style";
import { FillHeart, StrokeHeart } from "../assets/HeartIcon";
import { FillBookMark, StrokeBookMark } from "../assets/BookMarkIcon";
import { MAIN_THEME_COLOR } from "../libs/const/color";

RecipeDetail.defaultProps = {
  recipeData: {
    title: "라면만큼 쉬운 백종원 라볶이",
    owner: {
      nickName: "코린이",
      profileUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    },
    process: [
      "대파는 송송 썬다.",
      "팬에 기름을 두르고 닭을 굽듯이 볶는다.",
      "송송 썬 대파를 넣고 함께 볶는다.",
    ],
    recipeServing: 1, // 1인분
    recipeType: "메인 반찬",
    ingredient: [
      {
        name: "닭고기",
        weight: "100g",
      },
      {
        name: "떡",
        weight: "120g",
      },
      {
        name: "연두부",
        weight: "20g",
      },
      {
        name: "어묵",
        weight: "50g",
      },
      {
        name: "대파",
        weight: "65g",
      },
      {
        name: "양파",
        weight: "20g",
      },
    ],
    imageUrl:
      "https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp",
    likeCount: 0,
    // 북마크, 좋아요는 현재 로그인한 회원이 갖고있어야 하는 데이터
  },
};
// 추후에 axios get으로 요청해서 데이터를 받아오고 useState로 넣어주면 될까?

function RecipeDetail({ recipeData }) {
  // 내 냉장고 컴포넌트(버튼, 모달)은 생성되면 App의 라우터나 Layout에 추가할 예정
  // 현재 페이지에서는 [내 냉장고 임시 작업용 버튼 및 모달] 사용 중
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* 내 냉장고 임시 작업용 START */}
      <button onClick={() => setShowModal(true)}>냉장고 버튼 예시</button>
      <PortalModal handleShowModal={showModal} size={"40%"}>
        <MyFridge onClose={() => setShowModal(false)} />
      </PortalModal>
      {/* 내 냉장고 임시 작업용 END */}

      <Detail.Wrap>
        <Detail.Box>
          <img src={recipeData.imageUrl} alt={recipeData.title} />
          <h3>{recipeData.title}</h3>
        </Detail.Box>
        <Detail.Owner>
          <div className="profile">
            <div className="imgBox">
              <span className="editorUser"></span>
              <img
                src={recipeData.owner.profileUrl}
                alt={recipeData.owner.nickName}
              />
            </div>
            <span className="nickName">
              <span className="editorUser">에디터</span>
              {recipeData.owner.nickName}
            </span>
          </div>
          <div className="buttons">
            <span>{recipeData.likeCount}</span>
            <button>
              <StrokeHeart color={MAIN_THEME_COLOR[0]} />
            </button>
            <button>
              <StrokeBookMark color={MAIN_THEME_COLOR[0]} />
            </button>
          </div>
        </Detail.Owner>
        <Detail.Box className="shadow">
          <div>
            <Detail.BoxTitle>
              <h4>재료</h4>
              <span>{recipeData.recipeServing} 인분</span>
            </Detail.BoxTitle>
            <Detail.UnorderList>
              {recipeData.ingredient.map((item, index) => {
                return (
                  <li key={index}>
                    <span className="name">{item.name}</span>
                    <span className="line"></span>
                    <span className="weight">{item.weight}</span>
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
              {recipeData.process.map((step, index) => {
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
        <Detail.Buttons>
          <button className="editBtn">레시피 수정하기</button>
          <button className="deleteBtn">삭제</button>
        </Detail.Buttons>
      </Detail.Wrap>
    </>
  );
}

export default RecipeDetail;
