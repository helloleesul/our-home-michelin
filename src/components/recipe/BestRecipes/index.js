import Title from "@/components/common/Title";
import Recipes from "@/components/recipe/RecipesWrap";
import { GET } from "@/libs/api";
import { useEffect, useState } from "react";

export default function BestRecipes() {
  const [recipes, setRecipes] = useState();

  const getRecipes = async () => {
    try {
      const response = await GET("/popular-recipes");
      setRecipes(response);
    } catch (error) {
      console.log("🚀 ~ onInfoModify ~ error:", error);
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <Title
        icon={"✨🍳"}
        title={"베스트 레시피"}
        type={"basic"}
        position={"center"}
      />
      <Recipes recipes={recipes} col={5} index={true} />
    </div>
  );
}
