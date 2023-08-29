import React from "react";
import * as S from "./Contents.style"; // Contents 스타일을 모두 가져옴

function Contents({ foodList }) {
  if (!foodList || (Array.isArray(foodList) && !foodList.length)) {
    return <div>Loding</div>;
  }

  return (
    <S.Section>
      {foodList.map((foods, index) => (
        <S.RecipeLink key={foods._id + index} to={`/recipe/${foods._id}`}>
          <S.FoodImage src={foods.imageUrl} alt={foods.title} />
          <p>{foods.title}</p>
        </S.RecipeLink>
      ))}
    </S.Section>
  );
}

export default Contents;
