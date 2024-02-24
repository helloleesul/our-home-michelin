import * as S from "./style";

export default function Header() {
  return (
    <header>
      <S.Container>
        <S.Title>
          🏠 우리집 <span>냉슐랭</span> 🍚🍒🥐🍋
        </S.Title>
        <S.UserLink>
          <S.Button to="/join">회원가입</S.Button>
          <S.Button to="/login">로그인</S.Button>
          {/* <S.Button to="/mypage">🧑‍🍳 마이페이지</S.Button> */}
          {/* <S.Button>로그아웃</S.Button> */}
        </S.UserLink>
      </S.Container>
    </header>
  );
}
