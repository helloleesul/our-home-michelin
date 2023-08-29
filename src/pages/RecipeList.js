import React, { useState, useEffect } from "react";
import { MAIN_THEME_COLOR } from "../libs/const/color";
// import { FillHeart, StrokeHeart } from "./assets/HeartIcon.js";
// import LikeBtn from "../components/common/LikeBtn";
// import axios from "axios";
import List from "../components/pages/recipeList/List";
import * as S from "./RecipeList.style";

function RecipeList(props) {
  // const [like, setLike] = useState(false);
  const [recipes, setRecipes] = useState([]);

  return (
    <>
      {/* 모든 레시피  :: 레시피DB ID의 갯수를 변수로 만들면 되나? */}
      <S.Title>
        <h3>{props.title || "전체 레시피"}</h3>
      </S.Title>

      <S.Lists>
        <List /> <List /> <List /> <List /> <List />
      </S.Lists>
    </>
  );
}

export default RecipeList;
