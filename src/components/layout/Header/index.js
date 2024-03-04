/** @jsxImportSource @emotion/react */
import { ButtonLink, LinkStyle } from "../../../styles/common";
import * as S from "./style";

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.Title to="/">
          🏠 우리집 <span>냉슐랭</span> 🍚🍒🥐🍋
        </S.Title>
        <S.UserLink>
          <ButtonLink to="/join">회원가입</ButtonLink>
          <ButtonLink to="/login">로그인</ButtonLink>
          <ButtonLink to="/mypage/myRecipes">🧑‍🍳 마이페이지</ButtonLink>
          <button css={LinkStyle}>로그아웃</button>
        </S.UserLink>
      </S.Container>
    </S.Header>
  );
}
