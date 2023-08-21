import React, { useState } from "react";
import PortalModal from "../components/common/PortalModal";
import MyFridge from "../components/MyFridge";
import * as Detail from "./RecipeDetail.style";

function RecipeDetail(props) {
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
          <img
            src="https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp"
            alt=""
          />
          <h3>라볶이</h3>
        </Detail.Box>
        <Detail.Author>
          <div>
            <div>
              <img />
            </div>
            <span>
              <span>에디터</span>코린이
            </span>
          </div>
          <div>
            <span>28</span>
            <button>하트</button>
            <button>북마크</button>
          </div>
        </Detail.Author>
        <Detail.Box className="shadow">
          <div>
            <h4>재료</h4>
            <span>1인분</span>
            <ul>
              <li>
                <span>연두부</span>
                <span>75g</span>
              </li>
            </ul>
          </div>
        </Detail.Box>
        <Detail.Box className="shadow">
          <div>
            <h4>요리과정</h4>
            <span>메인 반찬</span>
            <ol>
              <li>대파는 송송 썬다.</li>
            </ol>
          </div>
        </Detail.Box>
        <Detail.Buttons>
          <button>레시피 수정하기</button>
          <button>삭제</button>
        </Detail.Buttons>
      </Detail.Wrap>
    </>
  );
}

export default RecipeDetail;
