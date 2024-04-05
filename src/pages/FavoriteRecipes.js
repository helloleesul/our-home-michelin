import Recipes from "@/components/recipe/RecipesWrap";
import { GET } from "@/libs/api";
import { useEffect, useState } from "react";

export default function FavoriteRecipes() {
  const [recipes, setRecipes] = useState(null);
  const [totalPage, setTotalPage] = useState();
  const [page, setPage] = useState();

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await GET(`/my-bookmark-recipes?page=${page}`);
        setRecipes(response.recipes);
        setTotalPage(response.totalPages);
      } catch (error) {
        console.log("🚀 ~ getRecipe ~ error:", error);
      }
    };
    getRecipes();
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [totalPage]);

  return (
    <div style={{ padding: "20px 0" }}>
      <Recipes
        recipes={recipes}
        totalPage={totalPage}
        page={page}
        onPageChange={setPage}
      />
    </div>
  );
}
