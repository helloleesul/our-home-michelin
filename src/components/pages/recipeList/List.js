import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./List.style.js"; // Contents 스타일을 모두 가져옴

// function List({ foodList }) {
//     // const visibleFoods = foodList.slice(startIndex, startIndex + itemsPerPage);

function List({ recipe }) {
  const [isBookmarked, setBookmarked] = useState(false);

  const toggleBookmark = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setBookmarked(!isBookmarked);
  };
  console.log(recipe.imageURL);
  return (
    <S.Card>
      <Link to={`/recipe/${recipe._id}`}>
        <S.ImgBookmark>
          <img src={recipe.imageUrl} alt={recipe.title} />
          <S.BookmarkButton onClick={toggleBookmark} isBookmarked={isBookmarked}>
            {isBookmarked ? "❤️" : "🤍"}
          </S.BookmarkButton>
        </S.ImgBookmark>
        <S.RecipeTitle>{recipe.title}</S.RecipeTitle>
      </Link>
    </S.Card>
  );
}

export default List;
