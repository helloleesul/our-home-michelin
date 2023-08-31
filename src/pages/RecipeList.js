import React, { useState, useEffect } from "react";
import { MAIN_THEME_COLOR } from "../libs/const/color";
// import { FillHeart, StrokeHeart } from "./assets/HeartIcon.js";
// import LikeBtn from "../components/common/LikeBtn";
// import axios from "axios";
import List from "../components/pages/recipeList/List";
import * as S from "./RecipeList.style";
import axios from "axios";
import { useLocation } from "react-router-dom";

function chunkArray(myArray, chunk_size) {
  let index = 0;
  let arrayLength = myArray.length;
  let tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    const chunk = myArray.slice(index, index + chunk_size);
    tempArray.push(chunk);
  }

  return tempArray;
}

function RecipeList(props) {
  // const [like, setLike] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const searchRecipes = location.state?.searchRecipes;
  const [likeRecipes, setLikeRecipes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get("/api/check-login");
      setIsLoggedIn(response.data.isAuthenticated);
    } catch (error) {
      console.error("로그인 상태를 확인하는데 실패하였습니다.", error);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const fetchMyInfo = async () => {
    try {
      const response = await axios.get("/api/myinfo");
      setLikeRecipes(response.data.likeRecipes);
    } catch (error) {
      console.log("Failed to fetch user info", error);
    }
  };

  useEffect(() => {
    fetchMyInfo();
  }, []);

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
        {chunkArray(recipes, 5).map((recipeRow, index) => (
          <S.Row key={index}>
            {recipeRow.map((recipe) => (
              <List
                key={recipe._id}
                recipe={recipe}
                isBookmarked={likeRecipes.includes(recipe._id)}
                isLoggedIn={isLoggedIn}
              />
            ))}
          </S.Row>
        ))}
      </S.Lists>
    </>
  );
}

export default RecipeList;
