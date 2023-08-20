import React, { useState } from "react"; // useLocation 추가
import { Container } from "./Layout";
import * as S from "./Navigation.style";

function Navigation(props) {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (link) => {
    if (props.resetNavLinks) {
      setActiveLink(link);
      props.setResetNavLinks(false); // resetNavLinks 상태를 다시 false로 변경
    } else {
      setActiveLink(link);
    }
  };

  return (
    <nav>
      <S.Nav>
        <Container>
          <S.NavContainer>
            <S.CustomNavLink
              to="/editor"
              active={activeLink === "editor" && !props.resetNavLinks}
              onClick={() => handleNavLinkClick("editor")}
            >
              냉슐랭 에디터
            </S.CustomNavLink>
            <S.CustomNavLink
              to="/recipe"
              active={activeLink === "popular" && !props.resetNavLinks}
              onClick={() => handleNavLinkClick("popular")}
            >
              인기레시피
            </S.CustomNavLink>
            <S.CustomNavLink
              to="/recipe"
              active={activeLink === "all" && !props.resetNavLinks}
              onClick={() => handleNavLinkClick("all")}
            >
              전체레시피
            </S.CustomNavLink>
            <S.CustomNavLink
              to="/recipe/write"
              active={activeLink === "write" && !props.resetNavLinks}
              onClick={() => handleNavLinkClick("write")}
            >
              레시피 작성
            </S.CustomNavLink>
          </S.NavContainer>
        </Container>
      </S.Nav>
    </nav>
  );
}

export default Navigation;
