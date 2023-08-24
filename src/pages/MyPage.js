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
      {/*dsadsa*/}
      <S.RecipeBoxContainer>
        <S.TabsContainer>
          <S.TabButton>북마크 레시피</S.TabButton>
          <S.TabButton>나의 레시피</S.TabButton>
        </S.TabsContainer>
        <S.RecipeContainer>
          <S.countContainer>
            <S.allCount>
              <S.conterTitleText>전체</S.conterTitleText>
              <p>10</p>
            </S.allCount>
            <S.menuCount>
              <S.menuCountBox>
                <S.conterTitleText>치킨</S.conterTitleText> <p>3</p>
              </S.menuCountBox>
              <S.menuCountBox>
                <S.conterTitleText>먹고</S.conterTitleText> <p>3</p>
              </S.menuCountBox>
              <S.menuCountBox>
                <S.conterTitleText>싶다</S.conterTitleText> <p>3</p>
              </S.menuCountBox>
            </S.menuCount>
          </S.countContainer>
          <S.RecipeList>
            <S.RecipeCard>레시피 1</S.RecipeCard>
            <S.RecipeCard>레시피 2</S.RecipeCard>
            <S.RecipeCard>레시피 1</S.RecipeCard>
            <S.RecipeCard>레시피 2</S.RecipeCard>
            <S.RecipeCard>레시피 1</S.RecipeCard>
            <S.RecipeCard>레시피 2</S.RecipeCard>
            <S.RecipeCard>레시피 1</S.RecipeCard>
            <S.RecipeCard>레시피 2</S.RecipeCard>
            <S.RecipeCard>레시피 1</S.RecipeCard>
            <S.RecipeCard>레시피 1</S.RecipeCard>
            <S.RecipeCard>레시피 2</S.RecipeCard>
            <S.RecipeCard>레시피 2</S.RecipeCard>
            <S.RecipeCard>레시피 1</S.RecipeCard>
            <S.RecipeCard>레시피 2</S.RecipeCard>
            <S.RecipeCard>레시피 1</S.RecipeCard>
            <S.RecipeCard>레시피 1</S.RecipeCard>
          </S.RecipeList>
          {/* 페이지네이션을 위한 버튼들 */}
          <S.Pagination>
            <S.PaginationButton>3</S.PaginationButton>
          </S.Pagination>
        </S.RecipeContainer>
      </S.RecipeBoxContainer>
    </>
  );
}

MyPage.defaultProps = {
  recipes: [], // 디폴트 레시피 데이터 배열
};

export default MyPage;
