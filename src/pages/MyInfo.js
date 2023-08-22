import React, { useState } from "react";
import * as S from "../components/pages/UserAccessForm/UserAccessForm.style";
import Input from "../components/pages/myInfo/Input";
import chef1 from "../assets/img/chef1.png";
import PortalModal from "../components/common/PortalModal";
import ModalBox from "../components/common/ModalBox";

function MyInfo(props) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
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
          <Input text="닉네임" type="text" showBtn="true" />
          <Input text="이메일" type="text" />
          <Input text="비밀번호" type="password" showBtn="true"></Input>
          <S.Text></S.Text>
          <S.Btn>저장</S.Btn>
          <S.Text fontSize="13px" onClick={() => setShowModal(true)}>
            회원탈퇴
          </S.Text>
        </S.InputContainer>
      </S.Container>
    </>
  );
}

export default MyInfo;
