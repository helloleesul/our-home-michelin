import { useEffect, useState } from "react";
import RecipesWrap from "@/components/recipe/RecipesWrap";
import Title from "@/components/common/Title";
import { GET, POST } from "@/libs/api";
import { Flex, WidthBox } from "@/styles/common";
import RadioInput from "@/components/common/RadioInput";
import { RECIPE_TYPE_LIST } from "@/libs/constants/listItems";
import { useLocation, useSearchParams } from "react-router-dom";
import { selectFridge } from "@/libs/store/fridgeSlice";
import { useSelector } from "react-redux";

const ALL_RECIPE_TYPE_LIST = [
  { label: "전체", value: "all" },
  ...RECIPE_TYPE_LIST,
];

export default function RecipeList() {
  const [search, setSearch] = useSearchParams();
  const type = search.get("type");
  const location = useLocation();
  const fridgeMode = location.state;

  const [recipes, setRecipes] = useState([]);
  const [isFridgeMode, setIsFridgeMode] = useState(fridgeMode || false);
  const { ingredients } = useSelector(selectFridge);

  useEffect(() => {
    fridgeMode && setIsFridgeMode(true);
  }, [fridgeMode]);

  useEffect(() => {
    const getFridgeRecipes = async () => {
      try {
        const response = await POST("/search-ingredients-recipes", {
          ingredients: ingredients.map((item) => item.name),
        });
        setRecipes(response);
      } catch (error) {
        console.log("🚀 ~ getRecipes ~ error:", error);
      }
    };
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

    if (isFridgeMode) {
      getFridgeRecipes();
    } else getRecipes();
  }, [ingredients, isFridgeMode, type]);

  return (
    <WidthBox width={"80"}>
      <Flex gap={"30"}>
        <Title
          icon={"🍽️"}
          title={isFridgeMode ? "내 냉장고 레시피" : "모든 레시피"}
          position={"left"}
          type={"basic"}
        />
        <label htmlFor="fridge">
          냉장고
          <input
            type="checkbox"
            id="fridge"
            checked={isFridgeMode}
            onChange={() => setIsFridgeMode((prev) => !prev)}
          />
        </label>
        <RadioInput
          onChange={(v) => {
            setSearch({ type: v });
          }}
          defaultSelected={type ? type : "all"}
          options={ALL_RECIPE_TYPE_LIST}
        />
        {recipes && <RecipesWrap recipes={recipes} col={4} />}
      </Flex>
    </WidthBox>
  );
}
