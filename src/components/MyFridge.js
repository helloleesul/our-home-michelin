import React from "react";
import CloseIcon from "../assets/CloseIcon";
import { Header, Content } from "./MyFridge.style";

function MyFridge({ onClose }) {
  return (
    <>
      <Header>
        <h3>나의 냉장고</h3>
        <button onClick={onClose}>
          <CloseIcon color="#fff" />
        </button>
      </Header>
      <Content></Content>
    </>
  );
}

export default MyFridge;
