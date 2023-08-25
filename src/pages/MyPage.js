import React, { useState, useEffect } from "react";
import * as S from "./MyPage.style";
import BasicProfileImg from "../assets/img/BasicProfileImg.png";
import PortalModal from "../components/common/PortalModal";
import ModalBox from "../components/common/ModalBox";
import axios from "axios";
const text = "회원정보 수정";
function MyPage(props) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const [nickname, setNickname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [rank, setRank] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/myinfo");
        setNickname(response.data.nickName);
        setUserEmail(response.data.email);
        setRank(response.role);
      } catch (error) {
        console.log(error.response.data.error);
      }
    })();
  }, []);
  const hanldeImg = () => {
    alert("dlalwlzmfflr");
    //여기서 이미지를 파일에서 선택해서 넣게하고싶어
  };
  return (
    <>
      <PortalModal handleShowModal={showModal} size={"35%"}>
        <ModalBox closeModal={closeModal} text="회원정보 수정"></ModalBox>
      </PortalModal>
      <S.Container>
        <S.UserContainer>
          <S.ProfileImg
            onClick={hanldeImg}
            src={BasicProfileImg}
            alt="프로필 이미지"
          />
          <S.InfoContainer>
            <S.Text>{nickname}(닉네임)</S.Text>
            <S.Text>{userEmail} (이메일)</S.Text>
            <S.Button onClick={() => setShowModal(true)}>{text}</S.Button>
          </S.InfoContainer>
          <S.GradeContainer>
            <S.TextContainer>
              <S.Text fontSize="35px" color={rank === 1 ? "orange" : "green"}>
                {rank === 1 ? "에디터" : "일반"}
              </S.Text>
              <S.Text>회원등급</S.Text>
            </S.TextContainer>
          </S.GradeContainer>
        </S.UserContainer>
      </S.Container>
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
            <S.RecipeItemBox>
              <S.RecipeCard>레시피 이미지 1</S.RecipeCard>
              <S.RecipeText>막창</S.RecipeText>
            </S.RecipeItemBox>
            <S.RecipeItemBox>
              <S.RecipeCard>레시피 이미지 1</S.RecipeCard>
              <S.RecipeText>먹고</S.RecipeText>
            </S.RecipeItemBox>
            <S.RecipeItemBox>
              <S.RecipeCard>레시피 이미지 1</S.RecipeCard>
              <S.RecipeText>싶다</S.RecipeText>
            </S.RecipeItemBox>{" "}
            <S.RecipeItemBox>
              <S.RecipeCard>레시피 이미지 1</S.RecipeCard>
              <S.RecipeText>막창</S.RecipeText>
            </S.RecipeItemBox>{" "}
            <S.RecipeItemBox>
              <S.RecipeCard>레시피 이미지 1</S.RecipeCard>
              <S.RecipeText>막창</S.RecipeText>
            </S.RecipeItemBox>{" "}
            <S.RecipeItemBox>
              <S.RecipeCard>레시피 이미지 1</S.RecipeCard>
              <S.RecipeText>막창</S.RecipeText>
            </S.RecipeItemBox>{" "}
            <S.RecipeItemBox>
              <S.RecipeCard>레시피 이미지 1</S.RecipeCard>
              <S.RecipeText>막창</S.RecipeText>
            </S.RecipeItemBox>
          </S.RecipeList>
          <S.Pagination>
            <S.PaginationButton>1</S.PaginationButton>
            <S.PaginationButton>2</S.PaginationButton>
            <S.PaginationButton>3</S.PaginationButton>
          </S.Pagination>
        </S.RecipeContainer>
      </S.RecipeBoxContainer>
    </>
  );
}

MyPage.defaultProps = {
  recipes: [],
};

export default MyPage;
