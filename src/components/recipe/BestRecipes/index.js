import Title from "@/components/common/Title";
import RecipesWrap from "@/components/recipe/RecipesWrap";

export default function BestRecipes({ recipes }) {
  return (
    <>
      <Title
        icon={"✨🍳"}
        title={"베스트 레시피"}
        type={"basic"}
        position={"center"}
      />
      <RecipesWrap recipes={recipes} col={5} index={true} />
    </>
  );
}
