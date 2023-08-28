import React, { useEffect, useState } from "react";
import CloseIcon from "../assets/CloseIcon";
import {
  Header,
  Content,
  EmptyFridge,
  Fridge,
  IngredientList,
  IngredientGroup,
  BtnGroup,
} from "./MyFridge.style";
import fridgeImg from "../assets/img/emptyFridge.svg";
import INGREDIENT_DATA from "../libs/const/ingredientData";
import requestApi from "../libs/const/api";
import { Link } from "react-router-dom";
import Calendar from "./common/Calendar";

function formatDate(dateString) {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "ko-KR",
    options
  );

  const [year, month, day] = formattedDate.split(".");

  return `${year}년 ${month}월 ${day}일`;
}

function MyFridge({ onClose, isAuth }) {
  // 회원 인증 확인
  const [isUser, setIsUser] = useState(isAuth);

  // 기본 식재료 추가 모드
  const [ingrAdderMode, setIngrAdderMode] = useState(false);
  // 현재 기본 식재료
  const [ingrData, setIngrData] = useState(INGREDIENT_DATA);

  // 유저 냉장고 데이터
  const [userIngrData, setUserIngrData] = useState([]);
  // 사용가능 식재료
  const [safeIngr, setSafeIngr] = useState([]);
  // 소비기한 마감 식재료
  const [spoiledIngr, setSpoiledIngr] = useState([]);

  // 선택한 식재료
  const [currentIngr, setCurrentIngr] = useState({});
  // 선택한 식재료 상세보기
  const [showCurrentIngr, setShowCurrentIngr] = useState(false);
  // 달력
  const [showCalendar, setShowCalendar] = useState(false);
  // 변경 소비기한 마감일
  const [newBestBefore, setNewBestBefore] = useState();

  useEffect(() => {
    getUserFridge();
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

  useEffect(() => {
    setShowCalendar(false);
  }, [currentIngr]);

  const getUserFridge = async () => {
    if (isUser) {
      try {
        const response = await requestApi("get", "/myfridge");
        setUserIngrData(response);

        // userIngrData를 순회하면서 selected 속성 업데이트
        const updatedIngrData = ingrData.map((group) => {
          const updatedIngredients = group.ingredient.map((item) => {
            // 재료 이름이 userIngrData에 있는지 확인
            const matchingUserIngr = response.find(
              (userIngr) => userIngr.ingredientName === item.name
            );

            if (matchingUserIngr) {
              return { ...item, selected: true };
            } else {
              return { ...item, selected: false };
            }
          });
          return { ...group, ingredient: updatedIngredients };
        });

        setIngrData(updatedIngrData);
      } catch (error) {}
    }
  };

  const deleteIngredient = async (id) => {
    try {
      await requestApi("delete", `/myfridge/${id}`);

      setShowCurrentIngr(false);
      setShowCalendar(false);
      setNewBestBefore();
      getUserFridge();
    } catch (error) {
      console.log(error);
    }
  };

  const updateIngredient = async (id, date) => {
    try {
      await requestApi("put", `/myfridge/${id}`, {
        newBestBefore: date,
      });

      setShowCurrentIngr(false);
      setShowCalendar(false);
      setNewBestBefore();
      getUserFridge();
    } catch (error) {
      console.log(error);
    }
  };

  const addIngredient = async () => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    const bestBefore = futureDate.setDate(currentDate.getDate() + 7);

    const selectedIngredients = [];
    const userIngredients = userIngrData.map(
      (userIngr) => userIngr.ingredientName
    );

    ingrData.forEach((group) => {
      group.ingredient.forEach((item) => {
        if (item.selected) {
          if (userIngredients.includes(item.name)) {
            return;
          }
          selectedIngredients.push({
            ingredientName: item.name,
            bestBefore,
          });
        } else {
          if (!userIngredients.includes(item.name)) {
            return;
          }
          const selectedItem = userIngrData.find(
            (userIngr) => userIngr.ingredientName === item.name
          );
          deleteIngredient(selectedItem._id);
        }
      });
    });

    try {
      await requestApi("post", "/myfridge", {
        ingredients: selectedIngredients,
      });

      setIngrAdderMode(false);
      setShowCurrentIngr(false);
      getUserFridge();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCurrentIngr = (item) => {
    setShowCurrentIngr(true);
    setCurrentIngr(item);
  };

  const handleCheckboxChange = (itemToUpdate) => {
    setIngrData((prevData) => {
      const updatedData = prevData.map((group) => {
        const updatedItems = group.ingredient.map((item) => {
          if (item === itemToUpdate) {
            return { ...item, selected: !item.selected };
          }
          return item;
        });
        return { ...group, ingredient: updatedItems };
      });
      return updatedData;
    });
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
        {!isUser ? (
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
        ) : ingrAdderMode ? (
          // 재료 추가하기 컴포넌트
          <IngredientList>
            <h4>
              <span>냉장고</span>를 채워보세요!
            </h4>
            {ingrData.map((group, index) => {
              return (
                <IngredientGroup key={index}>
                  <h5>{group.type}</h5>
                  <ul className="basicIngr">
                    {group.ingredient.map((item, index) => {
                      return (
                        <li key={`ingr-${index}`}>
                          <input
                            type="checkbox"
                            id={`ingr-${item.name}`}
                            checked={item.selected}
                            onChange={() => handleCheckboxChange(item)}
                          />
                          <label htmlFor={`ingr-${item.name}`}>
                            <div className="box"></div>
                            <span>{item.name}</span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </IngredientGroup>
              );
            })}
            <BtnGroup>
              <button
                className="cancelBtn"
                onClick={() => {
                  setIngrAdderMode(false);
                  setShowCurrentIngr(false);
                  getUserFridge();
                }}
              >
                돌아가기
              </button>
              <button className="addBtn" onClick={addIngredient}>
                추가완료
              </button>
            </BtnGroup>
          </IngredientList>
        ) : (
          <>
            {userIngrData.length > 0 ? (
              // 재료 있을 때
              <Fridge>
                <IngredientList>
                  <IngredientGroup>
                    <h5>나의 식재료</h5>
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
                  {spoiledIngr.length !== 0 && (
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
                  )}
                  <button onClick={() => {}}>레시피 검색하기</button>
                  <button
                    onClick={() => {
                      setIngrAdderMode(true);
                      getUserFridge();
                    }}
                  >
                    재료 추가하기
                  </button>
                </IngredientList>
                {showCurrentIngr && (
                  <div>
                    <p>
                      식재료:
                      {currentIngr.ingredientName}
                    </p>
                    <p>
                      식재료 추가일:
                      {formatDate(currentIngr.inputDate)}
                    </p>
                    <p>
                      소비기한 마감일:
                      <button
                        onClick={() => setShowCalendar((prev) => !prev)}
                        disabled={new Date(currentIngr.bestBefore) < new Date()}
                      >
                        {newBestBefore
                          ? formatDate(newBestBefore)
                          : formatDate(currentIngr.bestBefore)}
                      </button>
                    </p>
                    {showCalendar && (
                      <Calendar
                        thisDate={new Date(currentIngr.bestBefore)}
                        onThisDate={(date) => setNewBestBefore(date)}
                      />
                    )}

                    {new Date(currentIngr.bestBefore) > new Date() && (
                      <button
                        onClick={() => {
                          updateIngredient(currentIngr._id, newBestBefore);
                        }}
                      >
                        저장하기
                      </button>
                    )}
                    <button
                      onClick={() => {
                        deleteIngredient(currentIngr._id);
                      }}
                    >
                      삭제하기
                    </button>
                    <button
                      onClick={() => {
                        setShowCurrentIngr(false);
                        setShowCalendar(false);
                        setNewBestBefore();
                        getUserFridge();
                      }}
                    >
                      닫기
                    </button>
                  </div>
                )}
              </Fridge>
            ) : (
              // 재료 없을 때
              <EmptyFridge>
                <img src={fridgeImg} alt="빈 식재료" height={230} />
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
          </>
        )}
      </Content>
    </>
  );
}

export default MyFridge;
