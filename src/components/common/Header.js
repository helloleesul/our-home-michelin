import React, { useState } from "react";
import Navigation from "./Navigation";
import { Container } from "./Layout";
import * as S from "./Header.style";

function Header(props) {
  const [resetNavLinks, setResetNavLinks] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleTitleClick = () => {
    setResetNavLinks(true);
  };

  return (
    <header>
      <Container>
        {isLoggedIn ? (
            // 로그인 상태일 때
            <S.User>
              <S.LoginLogout to="/logout">로그아웃</S.LoginLogout>
              <S.JoinMypage to="/mypage">마이페이지</S.JoinMypage>
            </S.User>
          ) : (
            // 로그인되지 않은 상태일 때
            <S.User>
              <S.JoinMypage to="/join">회원가입</S.JoinMypage>
              <S.LoginLogout to="/login">로그인</S.LoginLogout>
            </S.User>
          )}
        <S.Title to="/" onClick={handleTitleClick}>
          우리집 <span>냉슐랭</span>
        </S.Title>
      </Container>
      <Navigation resetNavLinks={resetNavLinks} setResetNavLinks={setResetNavLinks} />
    </header>
  );
}

export default Header;
