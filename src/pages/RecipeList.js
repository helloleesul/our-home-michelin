import { useEffect, useMemo, useState } from "react";
import Recipes from "@/components/recipe/RecipesWrap";
import Title from "@/components/common/Title";
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
import { apiSlice } from "@/libs/store/apiSlice";

const ALL_RECIPE_TYPE_LIST = [
  { label: "전체", value: "all" },
  ...RECIPE_TYPE_LIST,
];

export default function RecipeList() {
  const [search, setSearch] = useSearchParams();
  const type = search.get("type");
  const location = useLocation();
  const fridgeMode = location.state;

  const [page, setPage] = useState(1);
  const [isFridgeMode, setIsFridgeMode] = useState(fridgeMode || false);
  const { ingredients } = useSelector(selectFridge);
  const { isAuthenticated } = useSelector(selectAuth);
  const { openModal } = useModals();

  const filterIngredients = useMemo(() => {
    return () =>
      ingredients.filter((food) => new Date(food.bestBefore) >= new Date());
  }, [ingredients]);

  const { data: currentRecipes, isLoading } = apiSlice.useGetRecipesQuery({
    type,
    page,
  });

  const [setFridgeRecipes, a] = apiSlice.useSetFridgeRecipesMutation();
  console.log("🚀 ~ RecipeList ~ a:", a);
  // const aa = setFridgeRecipes({
  //   type,
  //   page,
  //   ingredients: filterIngredients().map((item) => item.name),
  // });

  useEffect(() => {
    !type && setSearch({ type: "all" });
  }, [setSearch, type]);

  useEffect(() => {
    fridgeMode && setIsFridgeMode(true);
  }, [fridgeMode]);

  useEffect(() => {
    setPage(1);
  }, [currentRecipes?.totalPages]);

  const handleFridgeCheckbox = () => {
    if (isAuthenticated) {
      setIsFridgeMode((prev) => !prev);
    } else {
      openModal(Alert, ONLY_USER);
    }
  };

  if (isLoading) {
    return <>loading</>;
  }
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
          defaultSelected={type}
          options={ALL_RECIPE_TYPE_LIST}
        />
        <Recipes
          recipes={currentRecipes?.recipes}
          col={4}
          totalPage={currentRecipes?.totalPages}
          page={page}
          onPageChange={setPage}
        />
      </Flex>
    </Contents>
  );
}
