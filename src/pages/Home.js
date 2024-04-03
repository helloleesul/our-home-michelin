import { Contents, Flex } from "@/styles/common";
import BestRecipes from "@/components/recipe/BestRecipes";
import MasterChiefRecipes from "@/components/recipe/MasterChiefRecipes";

export default function Home() {
  return (
    <Contents>
      <Flex gap={"80"}>
        <MasterChiefRecipes />
        <BestRecipes />
      </Flex>
    </Contents>
  );
}
