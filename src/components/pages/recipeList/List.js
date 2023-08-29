import React from "react";
import { Link } from "react-router-dom";
import * as S from "./List.style.js"; // Contents 스타일을 모두 가져옴

// function List({ foodList }) {
//     // const visibleFoods = foodList.slice(startIndex, startIndex + itemsPerPage);

function List({ recipe }) {
  console.log(recipe.imageURL);
  return (
    <Link to={`/recipe/${recipe._id}`}>
      <S.Card>
        <a href="#">
          <S.ImgBookmark>
            <div>
              {/* <S.Img> */}
              <div className="recipeImg">
                <img src={recipe.imageUrl} alt={recipe.title} />
              </div>
              {/* </S.Img> */}
              <div className="bookmarks">
                <button
                  onClick={() => {
                    alert("북마크에 담는 함수");
                  }}
                >
                  북마크
                </button>
              </div>
            </div>
          </S.ImgBookmark>
          <S.RecipeTitle>
            <p>{recipe.title}</p>
          </S.RecipeTitle>
        </a>
      </S.Card>
    </Link>
  );
}

export default List;
