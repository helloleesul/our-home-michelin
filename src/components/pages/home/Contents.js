import React from "react";
import * as S from "./Contents.style"; // Contents 스타일을 모두 가져옴

function Contents({ foodList }) {
  if (!foodList) {
    return <div>Loading...</div>; // 혹은 원하는 UI를 여기에 표시
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
