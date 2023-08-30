import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { Outlet, useLocation } from "react-router-dom";
import MyFridgeButton from "./MyFridgeButton";

import { useDispatch } from "react-redux";
import { setUserIngrData } from "../../libs/utils/fridgeIngrSlice";
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
  const location = useLocation();
  const isHiddenFridge = hiddenPathList.includes(location.pathname);

  const dispatch = useDispatch();

  useEffect(() => {
    getUserFridge();
  }, []);

  const getUserFridge = async () => {
    try {
      const response = await requestApi("get", "/myfridge");
      dispatch(setUserIngrData(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrap>
      <Header />
      <Navigation />
      <main>
        <Container>
          <Outlet />
        </Container>
        {!isHiddenFridge && <MyFridgeButton />}
      </main>
      <Footer />
    </Wrap>
  );
}

export { Container };
