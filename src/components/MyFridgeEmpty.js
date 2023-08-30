import React from "react";
import CloseIcon from "../assets/CloseIcon";
import { Header, Content, EmptyFridge } from "./MyFridge.style";
import { Link } from "react-router-dom";

function MyFridgeEmpty({ onClose }) {
  return (
    <>
      <Header>
        <h3>나의 냉장고</h3>
        <button onClick={onClose}>
          <CloseIcon color="#fff" />
        </button>
      </Header>
      <Content>
        <EmptyFridge>
          <h4>우리집 냉슐랭 요리사가 아니네요!</h4>
          <p>
            로그인하여 재료를 추가하고
            <br />
            바로 만들 수 있는 레시피를 확인 해보세요!
          </p>
          <Link to="/login" onClick={onClose}>
            로그인하기
          </Link>
        </EmptyFridge>
      </Content>
    </>
  );
}

export default MyFridgeEmpty;
