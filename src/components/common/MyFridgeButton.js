import React, { useState } from "react";
import PortalModal from "../common/PortalModal";
import MyFridge from "../MyFridge";
import mainRefrigerator from "../../assets/img/mainRefrigerator.png";
import styled from "@emotion/styled";

const MainRefrigerator = styled.img`
  width: 60px;
`;

const RefrigeratorButton = styled.button`
  position: fixed; /* 고정 위치 설정 */
  bottom: 3%; /* 아래 여백 조정 */
  right: 5%; /* 우측 여백 조정 */
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-sizing: border-box;
  border: none;
  background-color: #F7411F;
`;

function MyFridgeButton(props) {
  const [showModal, setShowModal] = useState(false);

  return(
    <>
    <RefrigeratorButton onClick={() => setShowModal(true)}>
      <MainRefrigerator src={mainRefrigerator} alt="mainRefrigerator" />
    </RefrigeratorButton>
    <PortalModal handleShowModal={showModal} size="md">
      <MyFridge onClose={() => setShowModal(false)} />
    </PortalModal>
    </>
  );
}

export default MyFridgeButton;