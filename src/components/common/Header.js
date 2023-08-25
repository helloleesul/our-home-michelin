import React, { useState } from "react";
import Navigation from "./Navigation";
import { Container } from "./Layout";
import * as S from "./Header.style";

function Header(isAuthHeader) {
  const [isAuthenticated, setIsAuthenticated] = useState(isAuthHeader);

  function logout() {
    // const cookie = document.cookie;
    // // 쿠키 이름과 동일한 이름으로 만료일을 과거로 설정하여 쿠키를 제거합니다.
    // cookie = `t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    // // setIsAuthenticated(false);
    // console.log(cookie);
    // 로그아웃 후 리다이렉션 등의 작업을 수행할 수 있습니다.
    window.location.href = "/"; // 예시: 로그아웃 후 홈 페이지로 이동
  }

  return (
    <header>
      <Container>
        {isAuthenticated ? (
          // 로그인 상태일 때
          <S.User>
            <S.JoinMypage to="/mypage">마이페이지</S.JoinMypage>
            <S.LoginLogout onClick={logout}>로그아웃</S.LoginLogout>
          </S.User>
        ) : (
          // 로그인되지 않은 상태일 때
          <S.User>
            <S.JoinMypage to="/join">회원가입</S.JoinMypage>
            <S.LoginLogout to="/login">로그인</S.LoginLogout>
          </S.User>
        )}
        <S.Title to="/">
          우리집 <span>냉슐랭</span>
        </S.Title>
      </Container>
    </header>
  );
}

export default Header;
