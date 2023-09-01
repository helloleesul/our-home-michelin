import React, { useState, useEffect } from "react";
import { MAIN_THEME_COLOR } from "../libs/const/color";
import List from "../components/pages/recipeList/List";
import * as S from "./RecipeList.style";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../libs/utils/layoutSlice";

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

function RecipeList({ title }) {
  const dispatch = useDispatch();

  const [recipes, setRecipes] = useState([]);
  const [likeRecipes, setLikeRecipes] = useState([]);
  const storeAuth = useSelector((state) => state.layout.isAuth);
  const userIngrData = useSelector((state) => state.fridge.userIngrData);
  const [showOnlyMyIngredients, setShowOnlyMyIngredients] = useState(false);
  const [recipeEmpty, setRecipeEmpty] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  const sortRecipes = (recipes) => {
    let sortedRecipes;
    switch (title) {
      case "전체 레시피":
        sortedRecipes = recipes.sort(
          (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
        );
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

  const fetchMyInfo = async () => {
    try {
      const response = await axios.get("/api/myinfo");
      setLikeRecipes(response.data.likeRecipes);
    } catch (error) {
      console.log("Failed to fetch user info", error);
    }
  };

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("/api/recipes");
      setRecipes(sortRecipes(response.data));
    } catch (error) {
      console.log("Failed to fetch recipes", error);
    }
  };

  const fetchFilteredRecipes = async () => {
    try {
      const currentDate = new Date();

      const safeIngr = [];
      const filteredIngr = userIngrData?.map((item) => {
        const itemDate = new Date(item.bestBefore);
        if (itemDate >= currentDate) {
          safeIngr.push(item);
        }
        return safeIngr;
      });
      const myIngredients = filteredIngr?.map(
        (ingredient) => ingredient.ingredientName
      );
      const recipesResponse = await axios.post(
        "/api/search-ingredients-recipes",
        { ingredients: myIngredients }
      );
      setRecipes(sortRecipes(recipesResponse.data));
    } catch (error) {
      console.log("Failed to fetch filtered recipes", error);
    }
  };

  const getDisplayedRecipes = () => {
    const indexOfLastRecipe = currentPage * itemsPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;

    return recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(setLoading(true));

    if (storeAuth) {
      fetchMyInfo();
    }
  }, []);

  useEffect(() => {
    if (recipes?.length === 0) {
      setRecipeEmpty(true);
    } else {
      setRecipeEmpty(false);
    }
    dispatch(setLoading(false));
  }, [recipes]);

  useEffect(() => {
    dispatch(setLoading(true));
    if (showOnlyMyIngredients) {
      fetchFilteredRecipes();
    } else {
      fetchRecipes();
    }
  }, [showOnlyMyIngredients]);

  useEffect(() => {
    axios
      .get("/api/recipes")
      .then((response) => {
        let sortedRecipes;

        switch (title) {
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
  }, [title]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "50px 30px",
          height: "40px",
        }}
      >
        <S.Title>{title || "전체 레시피"}</S.Title>
        {title === "전체 레시피" && storeAuth && (
          <S.ToggleButton
            active={showOnlyMyIngredients}
            themeColor={MAIN_THEME_COLOR}
            onClick={() => {
              setShowOnlyMyIngredients((prev) => !prev);
            }}
          >
            {showOnlyMyIngredients
              ? "모든 레시피 보기"
              : "내가 가진 재료 레시피만 보기"}
          </S.ToggleButton>
        )}
      </div>
      {recipeEmpty && <p style={{ textAlign: "center" }}>레시피가 없습니다.</p>}
      <S.Lists>
        {chunkArray(getDisplayedRecipes(), 5).map((recipeRow, index) => (
          <S.Row key={index}>
            {recipeRow.map((recipe) => (
              <List
                key={recipe._id}
                recipe={recipe}
                isBookmarked={likeRecipes.includes(recipe._id)}
                isLoggedIn={storeAuth}
              />
            ))}
          </S.Row>
        ))}
      </S.Lists>

      <div style={{ textAlign: "center" }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <S.PaginationButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </S.PaginationButton>
        ))}
      </div>
    </>
  );
}

export default RecipeList;
