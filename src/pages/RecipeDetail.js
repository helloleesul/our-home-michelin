import { useParams } from "react-router-dom";
import Split from "@/components/layout/Split";
import { GET } from "@/libs/api";
import { useEffect, useState } from "react";
import RecipeSideNav from "@/components/recipe/RecipeSideNav";
import RecipeInfo from "@/components/recipe/RecipeInfo";
import { WidthBox } from "@/styles/common";

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
        // 없는 레시피일 때 처리해야 함
        console.log("🚀 ~ getRecipe ~ error:", error);
      }
    };
    if (detail) {
      getRecipe();
    }
  }, [detail]);

  return (
    recipe && (
      <WidthBox width={"80"}>
        <Split
          left={<RecipeInfo {...recipe} />}
          right={<RecipeSideNav {...recipe} />}
          size={[4, 2]}
        />
      </WidthBox>
    )
  );
}
