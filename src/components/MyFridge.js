import React from "react";

function MyFridge({ onClose }) {
  return (
    <>
      <button onClick={onClose}>냉장고 닫기</button>
    </>
  );
}

export default MyFridge;
