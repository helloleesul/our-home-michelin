import React, { useState } from "react";
import PortalModal from "../common/PortalModal";
import MyFridge from "../MyFridge";
import mainRefrigerator from "../../assets/img/mainRefrigerator.png";
import * as S from "./MyFridgeButton.style";

function MyFridgeButton({ isAuth }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <S.RefrigeratorButton onClick={() => setShowModal(true)}>
        <S.MainRefrigerator src={mainRefrigerator} alt="mainRefrigerator" />
      </S.RefrigeratorButton>
      <PortalModal handleShowModal={showModal} size={"40%"}>
        <MyFridge onClose={() => setShowModal(false)} isAuth={isAuth} />
      </PortalModal>
    </>
  );
}

export default MyFridgeButton;
