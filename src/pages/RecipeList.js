import React, { useState, useEffect } from "react";
import { MAIN_THEME_COLOR } from "../libs/const/color";
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
  const [fridgeIngredients, setFridgeIngredients] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [likeRecipes, setLikeRecipes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showOnlyMyIngredients, setShowOnlyMyIngredients] = useState(false);

  const location = useLocation();
  const searchRecipes = location.state?.searchRecipes;

  const sortRecipes = (recipes) => {
    let sortedRecipes;
    switch (props.title) {
      case "전체 레시피":
        sortedRecipes = recipes.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
        break;

      case "인기 레시피":
        sortedRecipes = recipes.sort((a, b) => b.likeCount - a.likeCount);
        break;

      default:
        sortedRecipes = recipes;
        break;
    }
    return sortedRecipes;
  };

  const toggleShowOnlyMyIngredients = () => {
    setShowOnlyMyIngredients(!showOnlyMyIngredients);
  };

  const fetchMyInfo = async () => {
    try {
      const response = await axios.get("/api/myinfo");
      setLikeRecipes(response.data.likeRecipes);
    } catch (error) {
      console.log("Failed to fetch user info", error);
    }
  };

  const fetchMyFridge = async () => {
    try {
      const response = await axios.get("/api/myfridge");
      setFridgeIngredients(response.data);
    } catch (error) {
      console.log("Failed to fetch fridge info", error);
    }
  };

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get("/api/check-login");
      setIsLoggedIn(response.data.isAuthenticated);
    } catch (error) {
      console.error("로그인 상태를 확인하는데 실패하였습니다.", error);
    }
  };

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("/api/recipes");
      const sorted = sortRecipes(response.data);
      setRecipes(sorted);
    } catch (error) {
      console.log("Failed to fetch recipes", error);
    }
  };

  const fetchFilteredRecipes = async () => {
    try {
      const myIngredients = fridgeIngredients?.map((ingredient) => ingredient.ingredientName);
      const recipesResponse = await axios.post("/api/search-ingredients-recipes", { ingredients: myIngredients });
      const sorted = sortRecipes(recipesResponse.data);
      setRecipes(sorted);
    } catch (error) {
      console.log("Failed to fetch filtered recipes", error);
    }
  };

  useEffect(() => {
    fetchMyInfo();
    fetchMyFridge();
    checkLoginStatus();
  }, []);

  useEffect(() => {
    if (showOnlyMyIngredients) {
      fetchFilteredRecipes();
    } else {
      fetchRecipes();
    }
  }, [showOnlyMyIngredients, props.title, fridgeIngredients]);

  useEffect(() => {
    setShowOnlyMyIngredients(false);
  }, [props.title]);

  useEffect(() => {
    console.log(searchRecipes);
    if (searchRecipes) {
      setRecipes(searchRecipes);
    }
  }, [searchRecipes]);

  useEffect(() => {
    axios
      .get("/api/recipes")
      .then((response) => {
        let sortedRecipes;

        switch (props.title) {
          case "전체 레시피":
            sortedRecipes = response.data.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
            break;

          case "인기 레시피":
            sortedRecipes = response.data.sort((a, b) => b.likeCount - a.likeCount);
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
      <S.ToggleButton
        active={showOnlyMyIngredients}
        themeColor={MAIN_THEME_COLOR}
        onClick={toggleShowOnlyMyIngredients}
      >
        {showOnlyMyIngredients ? "모든 레시피 보기" : "내가 가진 재료 레시피만 보기"}
      </S.ToggleButton>
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
