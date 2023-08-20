import React, { useState } from "react";
import PortalModal from "../common/PortalModal";
import MyFridge from "../MyFridge";

function MyFridgeButton(props) {
  const [showModal, setShowModal] = useState(false);

  return(
    <>
    <button onClick={() => setShowModal(true)}>냉장고 버튼 예시</button>
    <PortalModal handleShowModal={showModal} size="md">
      <MyFridge onClose={() => setShowModal(false)} />
    </PortalModal>
    </>
  );
}

export default MyFridgeButton;