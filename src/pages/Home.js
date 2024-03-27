import MasterChiefRecipes from "@/components/recipe/MasterChiefRecipes";
import { Contents, Flex } from "@/styles/common";
import { useLoaderData } from "react-router-dom";
import BestRecipes from "@/components/recipe/BestRecipes";

export default function Home() {
  const { masterChief, popularRecipes } = useLoaderData();

  return (
    <Contents>
      <Flex gap={"80"}>
        <MasterChiefRecipes recipes={masterChief} />
        <BestRecipes recipes={popularRecipes?.recipes} />
      </Flex>
    </Contents>
  );
}
