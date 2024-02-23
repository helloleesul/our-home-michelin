import { Outlet, useLocation } from "react-router-dom";
import { Container, Wrap } from "./styles/common";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Navigation from "./components/common/Navigation";
import MyFridgeButton from "./components/common/MyFridgeButton";

const hiddenPathList = ["/recipe/write"];

export default function App(props) {
  const location = useLocation();
  const isHiddenFridge = hiddenPathList.includes(location.pathname);

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
