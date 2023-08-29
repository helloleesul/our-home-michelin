import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CloseIcon from "../../assets/CloseIcon";
import * as S from "./ModalBox.style.js";
function ModalBox(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const handleClick = async () => {
    if (location.pathname === "/mypage") {
      try {
        const response = await axios.post("/api/confirm-password", {
          password: password,
        });
        if (response.data) {
          navigate("/mypage/info");
        }
      } catch (error) {
        alert(error.response.data.error);
      }
    } else {
      try {
        const response = await axios.delete("/api/myinfo/", {
          data: { password: password.toString() },
        });
        if (response.data) {
          alert("회원탈퇴 처리가 완료되었습니다.");
          navigate("/login");
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <S.ModalContainer>
        <S.CloseBtn onClick={props.closeModal}>
          <CloseIcon color="black" />
        </S.CloseBtn>
        <S.Text fontSize="25px">{props.text}</S.Text>
        <S.Text>{props.text} 하시려면 비밀번호를 입력해주세요.</S.Text>
        <S.Label>비밀번호</S.Label>
        <S.Input type="password" onChange={handlePasswordChange}></S.Input>
        <S.ModalBtn onClick={handleClick}>확인</S.ModalBtn>
      </S.ModalContainer>
    </>
  );
}
export default ModalBox;
