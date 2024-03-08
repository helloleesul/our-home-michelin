import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import INGREDIENT_DATA from "@/libs/constants/ingredientData";
import { selectAuth } from "@/libs/store/authSlice";
import { selectFridge } from "@/libs/store/fridgeSlice";

import * as S from "./style";

export default function Fridge({ onClose }) {
  const { isAuthenticated } = useSelector(selectAuth);
  const { ingredients } = useSelector(selectFridge);
  const [editMode, setEditMode] = useState(false);
  const [ingredientList, setIngredientList] = useState(INGREDIENT_DATA);

  console.log(
    "🚀 ~ Fridge ~ ingredientList.filter((type) => type.ingredient.some((ing) => ing.selected));:",
    ingredientList.flatMap((type) =>
      type.ingredient.filter((ing) => ing.selected).map((ing) => ing.name)
    )
  );

  const handleCheckboxChange = (item) => {
    setIngredientList((prev) =>
      prev.map((type) => ({
        ...type,
        ingredient: type.ingredient.map((ing) =>
          ing.name === item.name ? { ...ing, selected: !ing.selected } : ing
        ),
      }))
    );
  };

  return createPortal(
    <S.Modal>
      <S.Header>
        <h4>내 냉장고</h4>
        <button className="modal-close" onClick={onClose}>
          닫기
        </button>
      </S.Header>
      <S.Content>
        {isAuthenticated ? (
          <div>
            {!editMode ? (
              <S.Type>
                {ingredients.map((item) => (
                  <label key={item._id}>
                    <S.CheckBox type="button" value={item.ingredientName} />
                    <div>
                      <span>{item.imgUrl}</span>
                      <p>{item.ingredientName}</p>
                    </div>
                  </label>
                ))}
              </S.Type>
            ) : (
              <>
                {ingredientList.map((type, idx) => (
                  <div key={idx}>
                    <div>{type.type}</div>
                    <S.Type>
                      {type.ingredient.map((item, idx) => (
                        <label key={idx}>
                          <S.CheckBox
                            type="checkbox"
                            value={item.name}
                            checked={item.selected}
                            onChange={() => handleCheckboxChange(item)}
                            disabled={ingredients.findIndex(
                              (v) => v.ingredientName !== item.name
                            )}
                          />
                          <div>
                            <span>{item.imgUrl}</span>
                            <p>{item.name}</p>
                          </div>
                        </label>
                      ))}
                    </S.Type>
                  </div>
                ))}
              </>
            )}
            <button
              onClick={() => {
                setEditMode((prev) => !prev);
              }}
            >
              {!editMode ? "다른 재료 보기" : "재료 담기"}
            </button>
          </div>
        ) : (
          <>로그인하고 이용하세요</>
        )}
      </S.Content>
    </S.Modal>,
    document.getElementById("root")
  );
}
