import { useEffect, useMemo, useState } from "react";
import RecipesWrap from "@/components/recipe/RecipesWrap";
import Title from "@/components/common/Title";
import { GET, POST } from "@/libs/api";
import { Contents, Flex } from "@/styles/common";
import RadioInput from "@/components/common/RadioInput";
import { RECIPE_TYPE_LIST } from "@/libs/constants/listItems";
import { useLocation, useSearchParams } from "react-router-dom";
import { selectFridge } from "@/libs/store/fridgeSlice";
import { useSelector } from "react-redux";
import Checkbox from "@/components/common/Checkbox";
import { selectAuth } from "@/libs/store/authSlice";
import useModals from "@/libs/hooks/useModals";
import Alert from "@/components/modal/Alert";
import { ONLY_USER } from "@/libs/constants/alertData";

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
  const { isAuthenticated } = useSelector(selectAuth);
  const { openModal } = useModals();

  const filterIngredients = useMemo(() => {
    return () =>
      ingredients.filter((food) => new Date(food.bestBefore) >= new Date());
  }, [ingredients]);

  useEffect(() => {
    fridgeMode && setIsFridgeMode(true);
  }, [fridgeMode]);

  useEffect(() => {
    const getFridgeRecipes = async () => {
      try {
        const response = await POST(
          type && type !== "all"
            ? `/search-ingredients-recipes?type=${type}`
            : "/search-ingredients-recipes",
          {
            ingredients: filterIngredients().map((item) => item.name),
          }
        );
        setRecipes(response.recipes);
      } catch (error) {
        console.log("🚀 ~ getRecipes ~ error:", error);
      }
    };
    const getRecipes = async () => {
      try {
        const response = await GET(
          type && type !== "all" ? `/recipes?type=${type}` : "/recipes"
        );
        setRecipes(response.recipes);
      } catch (error) {
        console.log("🚀 ~ getRecipes ~ error:", error);
      }
    };

    if (isFridgeMode) {
      getFridgeRecipes();
    } else getRecipes();
  }, [filterIngredients, isFridgeMode, type]);

  const handleFridgeCheckbox = () => {
    isAuthenticated
      ? setIsFridgeMode((prev) => !prev)
      : openModal(Alert, ONLY_USER);
  };

  return (
    <Contents>
      <Flex gap={"30"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Title
            icon={"🍽️"}
            title={isFridgeMode ? "내 냉장고 레시피" : "모든 레시피"}
            type={"basic"}
          />
          <Checkbox
            id={"fridge"}
            label={"냉장고 재료"}
            checked={isFridgeMode}
            onChange={handleFridgeCheckbox}
          />
        </div>
        <RadioInput
          onChange={(v) => {
            setSearch({ type: v });
          }}
          defaultSelected={type ? type : "all"}
          options={ALL_RECIPE_TYPE_LIST}
        />
        <RecipesWrap recipes={recipes} col={4} />
      </Flex>
    </Contents>
  );
}
