import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./Layout";

function Navigation(props) {
  return (
    <nav>
      <Container>
        <NavLink to="/editor">냉슐랭 에디터</NavLink>
        <NavLink to="/recipe">인기레시피</NavLink>
        <NavLink to="/recipe">전체레시피</NavLink>
      </Container>
    </nav>
  );
}

export default Navigation;
