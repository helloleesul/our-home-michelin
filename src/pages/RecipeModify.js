import RecipeForm from "@/components/recipe/RecipeForm";
import { GET } from "@/libs/api";
import { Contents } from "@/styles/common";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RecipeModify() {
  const location = useLocation();
  const navigate = useNavigate();
  const recipeId = location.state;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (!recipeId) {
      navigate("/");
    }

    const getRecipe = async () => {
      try {
        const response = await GET(`/recipes/${recipeId}`);
        setRecipe(response);
      } catch (error) {
        console.log("🚀 ~ getRecipe ~ error:", error);
      }
    };
    getRecipe();
  }, [navigate, recipeId]);

  return (
    recipe && (
      <Contents>
        <RecipeForm modifyRecipe={recipe} />
      </Contents>
    )
  );
}
