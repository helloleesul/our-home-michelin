import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import INGREDIENT_DATA from "@/libs/constants/ingredientData";
import {
  deleteAllIngredients,
  deleteIngredients,
  newIngredients,
  selectFridge,
  updateIngredients,
} from "@/libs/store/fridgeSlice";

import * as S from "./style";
import { dateToShortString } from "@/libs/utils";
import Button from "@/components/common/Button";
import useModals from "@/libs/hooks/useModals";
import Confirm from "@/components/modal/Confirm";
import Calendar from "@/components/modal/Calandar";

export default function Fridge({ onClose, onClick }) {
  const dispatch = useDispatch();
  const { openModal } = useModals();
  const { ingredients } = useSelector(selectFridge);
  const [editMode, setEditMode] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const ingredientsNames = useCallback(() => {
    return ingredients.map((item) => item.name);
  }, [ingredients]);

  const handleCheckboxChange = (e, ingredient) => {
    const isChecked = e.target.checked;
    setSelectedIngredients((prev) =>
      isChecked
        ? [...prev, ingredient]
        : prev.filter((item) => item !== ingredient)
    );
  };

  return (
    <>
      {!editMode ? (
        <>
          {!ingredients.length ? (
            <div>
              <p>냉장고가 비었어요</p>
              <button onClick={() => setEditMode(true)}>냉장고 채우기</button>
            </div>
          ) : (
            <>
              <S.FridgeGroup>
                <Button
                  onClick={() => {
                    openModal(Confirm, {
                      title: "삭제 안내",
                      size: 30,
                      message: "정말로 삭제?",
                      onClick: () => dispatch(deleteAllIngredients()),
                    });
                  }}
                  type={"button"}
                  value={"전체삭제"}
                  width={"auto"}
                />
                <S.Fridge>
                  {ingredients.map((item) => (
                    <S.FridgeItem key={item._id}>
                      <button
                        className="delete"
                        onClick={() => dispatch(deleteIngredients(item._id))}
                      >
                        ✕
                      </button>
                      <span className="img">{item.imgUrl}</span>
                      <p className="name">{item.name}</p>
                      <S.Date>
                        <img src="/icons/createdDate.svg" alt="저장일자" />
                        <span>{dateToShortString(item.inputDate)}</span>
                      </S.Date>
                      <S.Date>
                        <img src="/icons/bestBefore.svg" alt="유통기한" />
                        <button
                          onClick={() =>
                            openModal(Calendar, {
                              title: "유통기한 수정",
                              thisDate: new Date(item.bestBefore),
                              onThisDate: (v) => {
                                dispatch(
                                  updateIngredients({ id: item._id, data: v })
                                );
                              },
                            })
                          }
                        >
                          {dateToShortString(item.bestBefore)}
                        </button>
                      </S.Date>
                    </S.FridgeItem>
                  ))}
                </S.Fridge>
              </S.FridgeGroup>
              <S.ButtonGroup>
                <button
                  onClick={() => {
                    onClick();
                    return onClose();
                  }}
                >
                  레시피 찾기
                </button>
                <button onClick={() => setEditMode(true)}>재료 찾기</button>
              </S.ButtonGroup>
            </>
          )}
        </>
      ) : (
        <>
          {Object.entries(INGREDIENT_DATA).map(([category, ingredients]) => (
            <S.Category key={category}>
              <h3>{category}</h3>
              <S.Group>
                {ingredients.map((ingredient) => (
                  <label key={ingredient.name} htmlFor={ingredient.name}>
                    <S.CheckBox
                      type="checkbox"
                      id={ingredient.name}
                      name={ingredient.name}
                      checked={selectedIngredients.includes(ingredient)}
                      onChange={(e) => handleCheckboxChange(e, ingredient)}
                      disabled={ingredientsNames().includes(ingredient.name)}
                    />
                    <S.Item className="info">
                      <S.Img className="img">{ingredient.imgUrl}</S.Img>
                      <S.Name className="name">{ingredient.name}</S.Name>
                    </S.Item>
                  </label>
                ))}
              </S.Group>
            </S.Category>
          ))}
          <S.ButtonGroup>
            <button
              onClick={() => {
                setEditMode(false);
                setSelectedIngredients([]);
              }}
            >
              취소
            </button>
            <button
              onClick={() => {
                const data = selectedIngredients.map((prev) => ({
                  ...prev,
                  bestBefore: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                }));
                dispatch(newIngredients(data));
                setEditMode(false);
                setSelectedIngredients([]);
              }}
              disabled={!selectedIngredients.length}
            >
              선택한 재료 담기
            </button>
          </S.ButtonGroup>
        </>
      )}
    </>
  );
}
