import React from "react";
import * as S from "./Contents.style"; // Contents 스타일을 모두 가져옴

function Contents({ foodList, startIndex, itemsPerPage }) {
  const visibleFoods= foodList.slice(startIndex, startIndex + itemsPerPage);

  return (
    <S.Section>
      {visibleFoods.map((foods, index) => (
        <S.RecipeLink key={foods.id + index} to={`/recipe/${foods.id}`}>
          <S.FoodImage src={foods.profileImage} alt={foods.name} />
          <p>{foods.name}</p>
        </S.RecipeLink>
      ))}
    </S.Section>
  );
}

export default Contents;
