import { ButtonLink } from "../../../styles/common";
import * as S from "./style";

export default function Header() {
  return (
    <header>
      <S.Container>
        <S.Title>
          🏠 우리집 <span>냉슐랭</span> 🍚🍒🥐🍋
        </S.Title>
        <S.UserLink>
          <ButtonLink to="/join">회원가입</ButtonLink>
          <ButtonLink to="/login">로그인</ButtonLink>
          {/* <ButtonLink to="/mypage">🧑‍🍳 마이페이지</ButtonLink> */}
          {/* <ButtonLink>로그아웃</ButtonLink> */}
        </S.UserLink>
      </S.Container>
    </header>
  );
}
