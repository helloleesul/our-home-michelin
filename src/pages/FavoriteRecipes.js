import RecipesWrap from "@/components/recipe/RecipesWrap";
import { GET } from "@/libs/api";
import { useEffect, useState } from "react";

export default function FavoriteRecipes() {
  const [recipes, setRecipes] = useState(null);

  const getRecipes = async () => {
    try {
      const response = await GET("/my-bookmark-recipes");
      setRecipes(response);
      console.log(response);
    } catch (error) {
      console.log("🚀 ~ getRecipe ~ error:", error);
    }
  };
  useEffect(() => {
    getRecipes();
  }, []);

  return (
    recipes && (
      <>
        <RecipesWrap recipes={recipes} />
      </>
    )
  );
}