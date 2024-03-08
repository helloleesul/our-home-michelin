import { useParams } from "react-router-dom";
import Split from "@/components/layout/Split";
import { GET } from "@/libs/api";
import { useEffect, useState } from "react";
import RecipeSideNav from "@/components/recipe/RecipeSideNav";
import RecipeInfo from "@/components/recipe/RecipeInfo";

export default function RecipeDetail() {
  const { detail } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await GET(`/recipes/${detail}`);
        setRecipe(response);
        console.log(response);
      } catch (error) {
        console.log("🚀 ~ getRecipe ~ error:", error);
      }
    };
    if (detail) {
      getRecipe();
    }
  }, [detail]);

  return (
    recipe && (
      <Split
        left={<RecipeInfo {...recipe} />}
        right={
          <RecipeSideNav imageUrl={recipe.imageUrl} writer={recipe.writer} />
        }
        size={[4, 2]}
      />
    )
  );
}
