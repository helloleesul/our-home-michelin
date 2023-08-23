import React, { useEffect, useState } from "react";
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
import requestApi from "../libs/const/api";

const USER_ID = "64e5cbde1c156c99026dda11";

function MyFridge({ onClose }) {
  const [ingredientAdder, setIngredientAdder] = useState(false);
  const [ingredientData, setIngredientData] = useState(INGREDIENT_DATA);
  // 유저 냉장고 데이터
  const [userFridgeData, setUserFridgeData] = useState([]);
  // 나의 식재료
  const [safeIngredients, setSafeIngredients] = useState([]);
  // 소비기한 마감 식재료
  const [spoiledIngredients, setSpoiledIngredients] = useState([]);

  useEffect(() => {
    getUserFridge();
  }, []);

  async function getUserFridge() {
    try {
      const response = await requestApi("get", `/user/${USER_ID}/fridge`);
      // 응답 데이터 처리
      console.log("유저 냉장고 식재료", response);
      setUserFridgeData(response);
    } catch (error) {
      // 에러 처리
      console.log(error);
    }
  }
  async function addIngredient() {
    try {
      const response = await requestApi("post", `/user/${USER_ID}/fridge`, {
        ingredientName: "토마토",
        imageUrl: "/",
        bestBefore: "20230823",
      });
      // 응답 데이터 처리
      console.log(response);
    } catch (error) {
      // 에러 처리
      console.log(error);
    }
  }

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
                          <input type="checkbox" />
                          <label>{item.name}</label>
                        </li>
                      );
                    })}
                  </ul>
                </IngredientGroup>
              );
            })}
            <button onClick={() => setIngredientAdder(false)}>돌아가기</button>
            <button onClick={addIngredient}>추가완료</button>
          </IngredientList>
        ) : // 내 냉장고 컴포넌트
        userFridgeData?.length !== 0 ? (
          // 재료 있을 때
          <Fridge>
            <IngredientList>
              <h4>나의 식재료</h4>
              <IngredientGroup>
                <h5>식재료</h5>
                <ul>
                  {/* {safeIngredients.map((item, index) => {
                        return (
                          <li key={index}>
                            <button>{item.name}</button>
                          </li>
                        );
                      })} */}
                </ul>
              </IngredientGroup>
              <IngredientGroup>
                <h5>소비기한 마감 식재료</h5>
                <ul>
                  {/* {spoiledIngredients.map((item, index) => {
                        return (
                          <li key={index}>
                            <button>{item.name}</button>
                          </li>
                        );
                      })} */}
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
