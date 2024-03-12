import { Outlet } from "react-router-dom";
import { Container, Layout } from "@/styles/common";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import FridgeButton from "@/components/fridge/FridgeButton";
import Fridge from "@/components/fridge/Fridge";

import { useModal } from "@/libs/hooks/useModal";

export default function App(props) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Layout>
      <Header />
      <Nav />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <FridgeButton onClick={openModal} />
      {isOpen && <Fridge onClose={closeModal} />}
      <Footer />
    </Layout>
  );
}
