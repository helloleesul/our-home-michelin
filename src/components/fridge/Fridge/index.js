import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import INGREDIENT_DATA from "@/libs/constants/ingredientData";
import { ingredientsPost, selectFridge } from "@/libs/store/fridgeSlice";

import * as S from "./style";

export default function Fridge() {
  const dispatch = useDispatch();
  const { ingredients } = useSelector(selectFridge);
  const [editMode, setEditMode] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const ingredientsNames = () => {
    return ingredients.map((item) => item.name);
  };

  const handleCheckboxChange = (e, ingredient) => {
    const isChecked = e.target.checked;
    setSelectedIngredients((prev) =>
      isChecked
        ? [...prev, ingredient]
        : prev.filter((item) => item !== ingredient)
    );
  };

  return !editMode ? (
    <>
      {!ingredients.length ? (
        <p>냉장고가 비었어요</p>
      ) : (
        <div>
          {ingredients.map((item) => (
            <div key={item._id}>{item.name}</div>
          ))}
          <button>레시피 찾기</button>
        </div>
      )}
      <button onClick={() => setEditMode(true)}>냉장고 채우러 가기</button>
    </>
  ) : (
    <>
      {Object.entries(INGREDIENT_DATA).map(([category, ingredients]) => (
        <div key={category}>
          <h3>{category}</h3>
          {ingredients.map((ingredient) => (
            <div key={ingredient.name}>
              <input
                type="checkbox"
                id={ingredient.name}
                name={ingredient.name}
                checked={selectedIngredients.includes(ingredient)}
                onChange={(e) => handleCheckboxChange(e, ingredient)}
                disabled={ingredientsNames().includes(ingredient.name)}
              />
              <label htmlFor={ingredient.name}>{ingredient.name}</label>
            </div>
          ))}
        </div>
      ))}
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
            bestBefore: new Date(),
          }));
          dispatch(ingredientsPost({ ingredients: data }));
        }}
      >
        재료 담기
      </button>
    </>
  );
}
