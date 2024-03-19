import { Outlet, useNavigate } from "react-router-dom";
import { Container, Layout } from "@/styles/common";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import FridgeButton from "@/components/fridge/FridgeButton";
import Fridge from "@/components/fridge/Fridge";

import useModals from "./libs/hooks/useModals";
import { selectAuth } from "./libs/store/authSlice";
import { useSelector } from "react-redux";
import Alert from "./components/modal/Alert";
import { ONLY_USER } from "./libs/constants/alertData";

export default function App() {
  const { isAuthenticated } = useSelector(selectAuth);
  const { openModal } = useModals();
  const navigate = useNavigate();

  const handleOnclick = () => {
    isAuthenticated
      ? openModal(Fridge, {
          title: "내 냉장고",
          size: 70,
          onClick: () =>
            navigate("/recipes", {
              state: { fridgeMode: true },
            }),
        })
      : openModal(Alert, {
          ...ONLY_USER,
          onAfterClose: () => navigate("/login"),
        });
  };

  return (
    <Layout>
      <Header />
      <Nav />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <FridgeButton onClick={handleOnclick} />
      <Footer />
    </Layout>
  );
}
