import React, { useState, useEffect } from "react";
import requestApi from "../../libs/const/api";
import { Container } from "./Layout";
import * as S from "./Header.style";

function Header({ isAuthHeader }) {
  const [isAuthenticated, setIsAuthenticated] = useState(isAuthHeader);

  useEffect(() => {
    setIsAuthenticated(isAuthHeader);
  }, [isAuthHeader]);

  const handleLogout = async () => {
    try {
      // 로그아웃 API 호출
      const res = await requestApi("post", "/logout");
      // 로그아웃이 성공적으로 처리되면 클라이언트에서도 로그아웃 상태로 업데이트
      if (res === "로그아웃 되었습니다.") {
        alert("로그아웃 되었습니다");
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("로그아웃 실패", error);
    }
  };

  return (
    <header>
      <Container>
        {isAuthenticated ? (
          // 로그인 상태일 때
          <S.User>
            <S.JoinMypage to="/mypage">마이페이지</S.JoinMypage>
            <S.LoginLogout to="/" onClick={handleLogout}>
              로그아웃
            </S.LoginLogout>
          </S.User>
        ) : (
          // 로그인되지 않은 상태일 때
          <S.User>
            <S.JoinMypage to="/join">회원가입</S.JoinMypage>
            <S.LoginLogout to="/login">로그인</S.LoginLogout>
          </S.User>
        )}
        <S.Title to="/">
          <h1>
            우리집<span> 냉슐랭</span>
          </h1>
        </S.Title>
      </Container>
    </header>
  );
}

export default Header;
