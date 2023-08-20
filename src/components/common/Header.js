import React, { useState } from "react";
import Navigation from "./Navigation";
import { Container } from "./Layout";
import * as S from "./Header.style";

function Header(props) {
  const [resetNavLinks, setResetNavLinks] = useState(false);

  const handleTitleClick = () => {
    setResetNavLinks(true);
  };

  return (
    <header>
      <Container>
        <S.JoinLogin>
          <S.Join to="/join">회원가입</S.Join>
          <S.Login to="/login">로그인</S.Login>
        </S.JoinLogin>
        <S.Title to="/" onClick={handleTitleClick}>
          우리집 <span>냉슐랭</span>
        </S.Title>
      </Container>
      <Navigation resetNavLinks={resetNavLinks} setResetNavLinks={setResetNavLinks} />
    </header>
  );
}

export default Header;
