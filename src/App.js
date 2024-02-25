import { Outlet, useLocation } from "react-router-dom";
import { Container, Layout } from "./styles/common";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
// import MyFridgeButton from "./components/common/MyFridgeButton";

// const hiddenPathList = ["/recipe/write"];

export default function App(props) {
  // const location = useLocation();
  // const isHiddenFridge = hiddenPathList.includes(location.pathname);

  return (
    <Layout>
      <Header />
      <Nav />
      <main style={{ padding: "50px 0" }}>
        <Container>
          <Outlet />
        </Container>
        {/* {!isHiddenFridge && <MyFridgeButton />} */}
      </main>
      <Footer />
    </Layout>
  );
}
