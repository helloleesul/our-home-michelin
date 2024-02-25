import SubmenuLayout from "../components/layout/SubmenuLayout";
import { RECIPE_LIST } from "../libs/const/menuList";

export default function RecipeList() {
  return (
    <SubmenuLayout icon={"📖"} title={"레시피 목록"} menuList={RECIPE_LIST}>
      RecipeList
    </SubmenuLayout>
  );
}
