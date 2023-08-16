import React from "react";
import { Container } from "./Layout";
import Navigation from "./Navigation";

function Header(props) {
  return (
    <header>
      <Container>Header</Container>
      <Navigation />
    </header>
  );
}

export default Header;
