import Title from "@/components/common/Title";
import Recipes from "@/components/recipe/RecipesWrap";
import { apiSlice } from "@/libs/store/apiSlice";

export default function BestRecipes() {
  const { data: recipes, isLoading } = apiSlice.useGetPopularRecipesQuery();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <Title
        icon={"✨🍳"}
        title={"베스트 레시피"}
        type={"basic"}
        position={"center"}
      />
      {isLoading ? (
        <>loading</>
      ) : (
        <Recipes recipes={recipes} col={5} index={true} />
      )}
    </div>
  );
}
