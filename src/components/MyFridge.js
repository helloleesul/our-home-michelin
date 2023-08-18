import React from "react";
import CloseIcon from "../assets/CloseIcon";
import { Header, Content } from "./MyFridge.style";

MyFridge.defaultProps = {
  fridgeData: [
    {
      type: "육류",
      ingredient: [
        {
          name: "닭고기",
          bestBefore: "20230817",
        },
      ],
    },
    {
      type: "야채류",
      ingredient: [
        {
          name: "토마토",
          bestBefore: "20230817",
        },
      ],
    },
  ],
};

function MyFridge({ onClose, fridgeData }) {
  return (
    <>
      <Header>
        <h3>나의 냉장고</h3>
        <button onClick={onClose}>
          <CloseIcon color="#fff" />
        </button>
      </Header>
      <Content>
        {fridgeData?.length !== 0 ? (
          <p>냉장고 식재료 채워졌음</p>
        ) : (
          <p>냉장고 식재료 비었음</p>
        )}
      </Content>
    </>
  );
}

export default MyFridge;
