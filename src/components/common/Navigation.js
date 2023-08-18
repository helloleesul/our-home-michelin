import React from "react";
import { Container } from "./Layout";
import * as S from "./Navigation.style"


function Navigation(props) {
  return (
    <nav>
      <S.Nav>
        <Container>
          <S.NavContainer>
            <S.CustomNavLink to="/editor">냉슐랭 에디터</S.CustomNavLink>
            <S.CustomNavLink to="/recipe">인기레시피</S.CustomNavLink>
            <S.CustomNavLink to="/recipe">전체레시피</S.CustomNavLink>
          </S.NavContainer>
        </Container>
      </S.Nav>
    </nav>
  );
}

export default Navigation;
