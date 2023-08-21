import React, { useState } from "react";
import CloseIcon from "../assets/CloseIcon";
import {
  Header,
  Content,
  EmptyFridge,
  Fridge,
  IngredientList,
} from "./MyFridge.style";
import fridgeImg from "../assets/img/emptyFridge.svg";

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
  const [ingredientAdder, setIngredientAdder] = useState(false);
  const [IngredientData, setIngredientData] = useState([
    {
      type: "육류",
      ingredient: [
        {
          name: "닭고기",
          selected: false,
          imgUrl: "",
        },
        {
          name: "돼지고기",
          selected: false,
          imgUrl: "",
        },
        {
          name: "소고기",
          selected: false,
          imgUrl: "",
        },
      ],
    },
    {
      type: "야채류",
      ingredient: [
        {
          name: "가지",
          selected: false,
          imgUrl: "",
        },
        {
          name: "고추",
          selected: false,
          imgUrl: "",
        },
        {
          name: "양파",
          selected: false,
          imgUrl: "",
        },
      ],
    },
  ]);

  return (
    <>
      <Header>
        <h3>나의 냉장고</h3>
        <button onClick={onClose}>
          <CloseIcon color="#fff" />
        </button>
      </Header>
      <Content>
        {ingredientAdder ? (
          <IngredientList>
            {IngredientData.map((group, index) => {
              return (
                <div key={index}>
                  <h5>{group.type}</h5>
                  <ul>
                    {group.ingredient.map((item, index) => {
                      return <li key={index}>{item.name}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
            <button onClick={() => setIngredientAdder(false)}>돌아가기</button>
            <button onClick={() => setIngredientAdder(false)}>추가완료</button>
          </IngredientList>
        ) : fridgeData?.length === 0 ? (
          <Fridge>냉장고 식재료 채워졌음</Fridge>
        ) : (
          <EmptyFridge>
            <img src={fridgeImg} alt="빈 식재료" />
            <h4>냉장고가 비었어요!</h4>
            <p>
              재료를 추가하고
              <br />
              바로 만들 수 있는 레시피를 확인 해보세요!
            </p>
            <button onClick={() => setIngredientAdder(true)}>
              재료 추가하기
            </button>
          </EmptyFridge>
        )}
      </Content>
    </>
  );
}

export default MyFridge;
