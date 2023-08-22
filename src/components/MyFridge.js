import React, { useState } from "react";
import CloseIcon from "../assets/CloseIcon";
import {
  Header,
  Content,
  EmptyFridge,
  Fridge,
  IngredientList,
  IngredientGroup,
} from "./MyFridge.style";
import fridgeImg from "../assets/img/emptyFridge.svg";
import INGREDIENT_DATA from "../libs/const/ingredientData";

const myFridgeData = [
  {
    name: "닭고기",
    bestBefore: "20230817",
  },
  {
    name: "닭고기",
    bestBefore: "20230817",
  },
  {
    name: "닭고기",
    bestBefore: "20230817",
  },
  {
    name: "닭고기",
    bestBefore: "20230817",
  },
  {
    name: "닭고기",
    bestBefore: "20230817",
  },
  {
    name: "닭고기",
    bestBefore: "20230817",
  },
];

function MyFridge({ onClose }) {
  const [ingredientAdder, setIngredientAdder] = useState(false);
  const [ingredientData, setIngredientData] = useState(INGREDIENT_DATA);
  // 나의 식재료
  const [safeIngredients, setSafeIngredients] = useState(myFridgeData);
  // 소비기한 마감 식재료
  const [spoiledIngredients, setSpoiledIngredients] = useState(myFridgeData);

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
          // 재료 추가하기 컴포넌트
          <IngredientList>
            <h4>재료 추가하기</h4>
            {ingredientData.map((group, index) => {
              return (
                <IngredientGroup key={index}>
                  <h5>{group.type}</h5>
                  <ul>
                    {group.ingredient.map((item, index) => {
                      return (
                        <li key={index}>
                          <button>{item.name}</button>
                        </li>
                      );
                    })}
                  </ul>
                </IngredientGroup>
              );
            })}
            <button onClick={() => setIngredientAdder(false)}>돌아가기</button>
            <button onClick={() => setIngredientAdder(false)}>추가완료</button>
          </IngredientList>
        ) : // 내 냉장고 컴포넌트
        myFridgeData?.length !== 0 ? (
          // 재료 있을 때
          <Fridge>
            <IngredientList>
              <h4>나의 식재료</h4>
              <IngredientGroup>
                <h5>식재료</h5>
                <ul>
                  {safeIngredients.map((item, index) => {
                    return (
                      <li key={index}>
                        <button>{item.name}</button>
                      </li>
                    );
                  })}
                </ul>
              </IngredientGroup>
              <IngredientGroup>
                <h5>소비기한 마감 식재료</h5>
                <ul>
                  {spoiledIngredients.map((item, index) => {
                    return (
                      <li key={index}>
                        <button>{item.name}</button>
                      </li>
                    );
                  })}
                </ul>
              </IngredientGroup>
              <button>레시피 검색하기</button>
              <button onClick={() => setIngredientAdder(true)}>
                재료 추가하기
              </button>
            </IngredientList>
          </Fridge>
        ) : (
          // 재료 없을 때
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
