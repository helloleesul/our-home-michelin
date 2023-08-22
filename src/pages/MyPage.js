import React, { useState } from "react";
import * as S from "./MyPage.style";
import BasicProfileImg from "../assets/img/BasicProfileImg.png";
import PortalModal from "../components/common/PortalModal";
import ModalBox from "../components/common/ModalBox";

const text = "회원정보 수정";
function MyPage(props) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <PortalModal handleShowModal={showModal} size={"35%"}>
        <ModalBox closeModal={closeModal} text="회원정보 수정"></ModalBox>
      </PortalModal>
      <S.Container>
        <S.UserContainer>
          <S.ProfileImg src={BasicProfileImg} alt="프로필 이미지" />
          <S.InfoContainer>
            <S.Text>킹석맨 (닉네임)</S.Text>
            <S.Text>se0kmin@gmail.com (이메일)</S.Text>
            <S.Button onClick={() => setShowModal(true)}>{text}</S.Button>
          </S.InfoContainer>
          <S.GradeContainer>
            <S.TextContainer>
              <S.Text fontSize="35px" color="orange">
                에디터
              </S.Text>
              <S.Text>회원등급</S.Text>
            </S.TextContainer>
          </S.GradeContainer>
        </S.UserContainer>
      </S.Container>
    </>
  );
}

export default MyPage;
