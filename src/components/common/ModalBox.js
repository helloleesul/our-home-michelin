import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import CloseIcon from "../../assets/CloseIcon";
import * as S from "./ModalBox.style.js";
function ModalBox(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const handlePageNavigation = () => {
    if (location.pathname === "/mypage") {
      navigate("/mypage/info");
    } else {
      navigate("/login");
    }
  };

  console.log(location.pathname);
  return (
    <>
      <S.CloseBtn onClick={props.closeModal}>
        <CloseIcon color="black" />
      </S.CloseBtn>
      <S.ModalContainer>
        <S.Text fontSize="25px">{props.text}</S.Text>
        <S.Text>{props.text} 하시려면 비밀번호를 입력해주세요.</S.Text>
      </S.ModalContainer>
      <S.ModalContainer>
        <S.Label>비밀번호</S.Label>
        <S.Input type="password"></S.Input>
        <S.ModalBtn onClick={handlePageNavigation}>확인</S.ModalBtn>
      </S.ModalContainer>
    </>
  );
}
export default ModalBox;
