import React, { useEffect, useState } from "react";
// import { MAIN_THEME_COLOR } from "../libs/const/color";
import RecipeCard from "../components/pages/recipeList/RecipeCard"
import * as S from "./RecipeList.style";
import axios from "axios";


function RecipeList(props) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('/api/recipes')
      .then(response => {
        console.log(response);
        setRecipes(response.data);
      });
  }, []);

  useEffect(() => {
    console.log(recipes)
  }, [recipes])

  return (

    <S.Back>

      <S.Title>전체 레시피</S.Title>


      <S.Lists>
        <RecipeCard recipes={recipes}></RecipeCard>
      </S.Lists>
    </S.Back>


  );
}

export default RecipeList;