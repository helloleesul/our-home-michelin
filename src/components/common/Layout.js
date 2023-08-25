import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { Outlet, useLocation } from "react-router-dom";
import MyFridgeButton from "./MyFridgeButton";
import requestApi from "../../libs/const/api";

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
    min-height: calc(100vh - 306px);
  }
`;

const hiddenPathList = ["/recipe/write"];

export default function Layout(props) {
  const [isAuth, setIsAuth] = useState(false);
  const location = useLocation();
  const isHiddenFridge = hiddenPathList.includes(location.pathname);

  const getUserAuth = async () => {
    // 첫번째 방법
    // auth api
    // 인증 true false 상태관리 확인해서 return문 아래 보여주는 것 컨트롤
    const response = await requestApi("get", "/check-login");
    console.log(response);
    setIsAuth(response.isAuthenticated);
  };
  // 두번째 방법
  // useAuth custom Hooks 만들어서 사용
  useEffect(() => {
    getUserAuth();
  }, [location.pathname]);
  return (
    <Wrap>
      <Header isAuthHeader={{ isAuth }} />
      <Navigation />
      <main>
        <Container>
          <Outlet context={{ isAuth }} />
        </Container>
        {!isHiddenFridge && <MyFridgeButton isAuth={isAuth} />}
      </main>
      <Footer />
    </Wrap>
  );
}

export { Container };
