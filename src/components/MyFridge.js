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

function MyFridge({ onClose, isAuth }) {
  const [ingrAdderMode, setIngrAdderMode] = useState(false);
  const [ingrData, setIngrData] = useState(INGREDIENT_DATA);
  // 유저 냉장고 식재료 유무
  const [isIngrInFridge, setIsIngrInFridge] = useState();
  // 유저 냉장고 데이터
  const [userIngrData, setUserIngrData] = useState([]);
  // 사용가능 식재료
  const [safeIngr, setSafeIngr] = useState([]);
  // 소비기한 마감 식재료
  const [spoiledIngr, setSpoiledIngr] = useState([]);
  const [currentIngr, setCurrentIngr] = useState({});
  const [showCurrentIngr, setShowCurrentIngr] = useState(false);

  useEffect(() => {
    if (isAuth) {
      getUserFridge();
    }
  }, []);

  useEffect(() => {
    const currentDate = new Date();

    const { safe, spoiled } = userIngrData.reduce(
      (result, item) => {
        const itemDate = new Date(item.bestBefore);
        if (itemDate >= currentDate) {
          result.safe.push(item);
        } else {
          result.spoiled.push(item);
        }
        return result;
      },
      { safe: [], spoiled: [] }
    );

    setSafeIngr(safe);
    setSpoiledIngr(spoiled);
  }, [userIngrData]);

  const getUserFridge = async () => {
    try {
      const response = await requestApi("get", "/myfridge");
      if (response?.length !== 0) {
        setIsIngrInFridge(true);
        setUserIngrData(response);
      }
    } catch (error) {
      if (error.response.status === 404) {
        setIsIngrInFridge(false);
      }
    }
  };

  const addIngredient = async () => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    try {
      await requestApi("post", "/myfridge", {
        ingredientName: "토마토",
        bestBefore: futureDate.setDate(currentDate.getDate() + 7),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCurrentIngr = (item) => {
    setShowCurrentIngr(true);
    setCurrentIngr(item);
  };

  return (
    <>
      <Header>
        <h3>나의 냉장고</h3>
        <button onClick={onClose}>
          <CloseIcon color="#fff" />
        </button>
      </Header>
      <Content>
        {!isAuth ? (
          <>비회원</>
        ) : ingrAdderMode ? (
          // 재료 추가하기 컴포넌트
          <IngredientList>
            <h4>재료 추가하기</h4>
            {ingrData.map((group, index) => {
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
            <button onClick={() => setIngrAdderMode(false)}>돌아가기</button>
            <button onClick={addIngredient}>추가완료</button>
          </IngredientList>
        ) : isIngrInFridge ? (
          // 재료 있을 때
          <Fridge>
            <IngredientList>
              <h4>나의 식재료</h4>
              <IngredientGroup>
                <h5>식재료</h5>
                <ul>
                  {safeIngr.map((item) => {
                    return (
                      <li key={item._id}>
                        <button onClick={() => handleCurrentIngr(item)}>
                          {item.ingredientName}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </IngredientGroup>
              <IngredientGroup>
                <h5>소비기한 마감 식재료</h5>
                <ul>
                  {spoiledIngr.map((item) => {
                    return (
                      <li key={item._id}>
                        <button onClick={() => handleCurrentIngr(item)}>
                          {item.ingredientName}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </IngredientGroup>
              <button>레시피 검색하기</button>
              <button onClick={() => setIngrAdderMode(true)}>
                재료 추가하기
              </button>
            </IngredientList>
            {showCurrentIngr && (
              <div>
                {currentIngr.ingredientName}
                {currentIngr.bestBefore}
                <button onClick={() => setShowCurrentIngr(false)}>닫기</button>
              </div>
            )}
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
            <button onClick={() => setIngrAdderMode(true)}>
              재료 추가하기
            </button>
          </EmptyFridge>
        )}
      </Content>
    </>
  );
}

export default MyFridge;
