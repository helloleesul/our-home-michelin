import React from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  min-width: 768px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  main {
    flex: 1;
  }
`;

export default function Layout(props) {
  return (
    <Wrap>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </Wrap>
  );
}

export { Container };
