import { useEffect, useState } from "react";
import RecipesWrap from "@/components/recipe/RecipesWrap";
import Title from "@/components/common/Title";
import { GET } from "@/libs/api";
import { Flex, WidthBox } from "@/styles/common";
import RadioInput from "@/components/common/RadioInput";
import { RECIPE_TYPE_LIST } from "@/libs/constants/listItems";
import { useSearchParams } from "react-router-dom";

const ALL_RECIPE_TYPE_LIST = [
  { label: "전체", value: "all" },
  ...RECIPE_TYPE_LIST,
];

export default function RecipeList() {
  const [search, setSearch] = useSearchParams();
  const type = search.get("type");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await GET(
          type && type !== "all" ? `/recipes?type=${type}` : "/recipes"
        );
        setRecipes(response);
      } catch (error) {
        console.log("🚀 ~ getRecipes ~ error:", error);
      }
    };
    getRecipes();
  }, [type]);

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
          onChange={(v) => {
            setSearch({ type: v });
          }}
          defaultSelected={type}
          options={ALL_RECIPE_TYPE_LIST}
        />
        {recipes && <RecipesWrap recipes={recipes} col={4} />}
      </Flex>
    </WidthBox>
  );
}
