import { useEffect, useState } from "react";
import RecipesWrap from "@/components/recipe/RecipesWrap";
import Title from "@/components/common/Title";
import Split from "@/components/layout/Split";
import { GET } from "@/libs/api";
import { Flex, WidthBox } from "@/styles/common";
import RadioInput from "@/components/common/RadioInput";
import { RECIPE_TYPE_LIST } from "@/libs/constants/listItems";

const ALL_RECIPE_TYPE_LIST = [
  { label: "전체", value: "all" },
  ...RECIPE_TYPE_LIST,
];

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [recipeType, setRecipeType] = useState("all");

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await GET(
          recipeType !== "all" ? `/recipes?type=${recipeType}` : "/recipes"
        );
        setRecipes(response);
      } catch (error) {
        console.log("🚀 ~ getRecipes ~ error:", error);
      }
    };
    getRecipes();
  }, [recipeType]);

  return (
    <WidthBox width={"80"}>
      <Flex gap={"30"}>
        <Title
          icon={"🍽️"}
          title={"레시피 목록"}
          position={"left"}
          type={"basic"}
        />
        <RadioInput
          onChange={setRecipeType}
          defaultSelected={recipeType}
          options={ALL_RECIPE_TYPE_LIST}
        />
        <RecipesWrap recipes={recipes} col={4} />
      </Flex>
    </WidthBox>
  );
}
