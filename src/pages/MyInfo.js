import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "../components/pages/UserAccessForm/UserAccessForm.style";
import Input from "../components/pages/myInfo/Input";
import chef1 from "../assets/img/chef1.png";
import PortalModal from "../components/common/PortalModal";
import ModalBox from "../components/common/ModalBox";

function MyInfo(props) {
  const [showModal, setShowModal] = useState(false);
  const [nickname, setNickname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/myinfo");
        setNickname(response.data.nickName);
        setUserEmail(response.data.email);
      } catch (error) {
        console.log(error.response.data.error);
      }
    })();
  }, []);
  const closeModal = () => {
    setShowModal(false);
  };
  const handleSaveClick = async () => {
    const userData = {
      nickName: nickname,
      email: userEmail,
      password: password,
    };

    try {
      const response = await axios.put("/api/myinfo", userData);
      console.log(response.data);
    } catch (error) {
      console.error("에러", error);
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <PortalModal handleShowModal={showModal} size={"35%"}>
        <ModalBox closeModal={closeModal} text="회원탈퇴"></ModalBox>
      </PortalModal>
      <S.Container>
        <S.ChefImage src={chef1} alt="요리사캐릭터" />
        <S.InputContainer>
          <S.Text style={{ cursor: "auto" }}>회원정보 수정</S.Text>
          <Input
            text="닉네임"
            type="text"
            showBtn="true"
            onChange={(event) => setNickname(event.target.value)}
          ></Input>
          <Input
            text="이메일"
            type="text"
            onChange={(event) => setUserEmail(event.target.value)}
          />
          <Input
            text="비밀번호"
            type="password"
            showBtn="true"
            onChange={(event) => setPassword(event.target.value)}
          />
          <S.Text></S.Text>
          <S.Btn onClick={handleSaveClick}>저장</S.Btn>
          <S.Text fontSize="13px" onClick={() => setShowModal(true)}>
            회원탈퇴
          </S.Text>
        </S.InputContainer>
      </S.Container>
    </>
  );
}

export default MyInfo;
