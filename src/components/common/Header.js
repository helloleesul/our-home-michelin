import React from "react";
import Navigation from "./Navigation";
import { Container } from "./Layout";
import * as S from "./Header.style";

function Header(props) {
  return (
    <header>
      <Container>
        <S.Title to="/">
          우리집 <span>냉슐랭</span>
        </S.Title>
      </Container>
      <Navigation />
    </header>
  );
}

export default Header;
