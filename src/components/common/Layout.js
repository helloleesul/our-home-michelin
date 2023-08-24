import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { Outlet, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const getUserAuth = () => {
    // auth api
    // 인증 true false 상태관리 확인해서 return문 아래 보여주는 것 컨트롤
  };
  // 두번째 방법
  // useAuth custom Hooks 만들어서 사용
  useEffect(() => {
    getUserAuth();
  }, [location.pathname]);
  return (
    <Wrap>
      <Header />
      <Navigation />
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
