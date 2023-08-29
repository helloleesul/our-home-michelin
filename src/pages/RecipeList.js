import React, { useState } from "react";
import { MAIN_THEME_COLOR } from "../libs/const/color";
import List from "../components/pages/recipeList/List";
import * as S from "./RecipeList.style";

function RecipeList({ foodList }) {

  // const [data, setData] = useState([]);


  const dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  return (

    <S.Back>

      <S.Title>전체 레시피</S.Title>


      <S.Lists>
        {dataArray.map((item, key) => (
          <List key={key}>{item} </List>
        ))}

        {/* {foodList.map((foods, index) => (
          <List key={foods._id + index} to={`/recipe/${foods._id}`}>
            <List src={foods.imageUrl} alt={foods.title} />
            <p>{foods.title}</p>
          </List>
        ))} */}
      </S.Lists>
    </S.Back>


  );
}

export default RecipeList;