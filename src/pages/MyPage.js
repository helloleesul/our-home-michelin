import React, { useState } from "react";
import * as S from "./MyPage.style";
import BasicProfileImg from "../assets/img/BasicProfileImg.png";
import PortalModal from "../components/common/PortalModal";
import CloseIcon from "../assets/CloseIcon";
function MyPage(props) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <PortalModal handleShowModal={showModal} size={"35%"}>
        <S.CloseBtn onClick={closeModal}>
          <CloseIcon color="black" />
        </S.CloseBtn>

        <S.ModalContainer>
          <S.Text fontSize="25px">회원 정보 수정</S.Text>
          <S.Text>회원정보를 수정하시려면 비밀번호를 입력해주세요.</S.Text>
        </S.ModalContainer>
        <S.ModalContainer>
          <S.Label>비밀번호</S.Label>
          <S.Input type="password"></S.Input>
          <S.ModalBtn>확인</S.ModalBtn>
        </S.ModalContainer>
      </PortalModal>
      <S.Container>
        <S.UserContainer>
          <S.ProfileImg src={BasicProfileImg} alt="프로필 이미지" />
          <S.InfoContainer>
            <S.Text>킹석맨 (닉네임)</S.Text>
            <S.Text>se0kmin@gmail.com (이메일)</S.Text>
            <S.Button onClick={() => setShowModal(true)}>
              회원정보 수정
            </S.Button>
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
