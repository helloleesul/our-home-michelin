import React, { useState } from "react";
// import { createPortal } from "react-dom";
import Modal from "../components/common/Modal";
import MyFridge from "../components/MyFridge";

function RecipeDetail(props) {
  // 냉장고 버튼은 생성되면 App의 라우터나 Layout에 추가할 예정, 또는 필요한 페이지컴포넌트마다 불러올 예정
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* 임시 작업용 버튼 */}
      <button onClick={() => setShowModal(true)}>냉장고 버튼 예시</button>
      <Modal handleShowModal={showModal}>
        <MyFridge onClose={() => setShowModal(false)} />
      </Modal>
    </div>
  );
}

export default RecipeDetail;
