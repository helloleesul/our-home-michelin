import { useSelector } from "react-redux";
import { useState } from "react";
import INGREDIENT_DATA from "@/libs/constants/ingredientData";
import { selectAuth } from "@/libs/store/authSlice";
import { selectFridge } from "@/libs/store/fridgeSlice";

import * as S from "./style";

export default function Fridge() {
  const { isAuthenticated } = useSelector(selectAuth);
  const { ingredients } = useSelector(selectFridge);
  const [editMode, setEditMode] = useState(false);
  const [ingredientList, setIngredientList] = useState(INGREDIENT_DATA);

  return (
    <div>
      <S.Header></S.Header>
      <S.Content></S.Content>
    </div>
  );
}
