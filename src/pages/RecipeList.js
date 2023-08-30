import React, { useState, useEffect } from "react";
import { MAIN_THEME_COLOR } from "../libs/const/color";
// import { FillHeart, StrokeHeart } from "./assets/HeartIcon.js";
// import LikeBtn from "../components/common/LikeBtn";
// import axios from "axios";
import List from "../components/pages/recipeList/List";
import * as S from "./RecipeList.style";
import axios from "axios";
import { useLocation } from "react-router-dom";

function RecipeList(props) {
  // const [like, setLike] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const searchRecipes = location.state?.searchRecipes;

  useEffect(() => {
    console.log(searchRecipes);
    if (searchRecipes) {
      setRecipes(searchRecipes);
    }
  }, [recipes]);

  useEffect(() => {
    axios
      .get("/api/recipes")
      .then((response) => {
        // console.log(response.data);
        let sortedRecipes;

        switch (props.title) {
          case "전체 레시피":
            sortedRecipes = response.data.sort(
              (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
            );
            break;

          case "인기 레시피":
            sortedRecipes = response.data.sort(
              (a, b) => b.likeCount - a.likeCount
            );
            break;

          default:
            sortedRecipes = response.data;
            break;
        }

        setRecipes(sortedRecipes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.title]);

  return (
    <>
      {/* 모든 레시피  :: 레시피DB ID의 갯수를 변수로 만들면 되나? */}
      <S.Title>{props.title || "전체 레시피"}</S.Title>

      <S.Lists>
        {recipes.map((recipe) => (
          <List key={recipe._id} recipe={recipe} />
        ))}
      </S.Lists>
    </>
  );
}

export default RecipeList;
