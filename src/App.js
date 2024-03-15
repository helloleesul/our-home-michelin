import { Outlet } from "react-router-dom";
import { Container, Layout } from "@/styles/common";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import FridgeButton from "@/components/fridge/FridgeButton";
import Fridge from "@/components/fridge/Fridge";

import useModals from "./libs/hooks/useModals";

export default function App() {
  const { openModal } = useModals();
  const handleOnclick = () => {
    openModal(Fridge, { title: "내 냉장고" });
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
