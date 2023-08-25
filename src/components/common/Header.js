import React, { useState } from "react";
import Navigation from "./Navigation";
import { Container } from "./Layout";
import * as S from "./Header.style";

function Header(isAuthHeader) {
  return (
    <header>
      <Container>
        {isAuthHeader ? (
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
        <S.Title to="/">
          우리집 <span>냉슐랭</span>
        </S.Title>
      </Container>
    </header>
  );
}

export default Header;
