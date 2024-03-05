import { useEffect, useState } from "react";
import RecipesWrap from "@/components/recipe/RecipesWrap";
import Title from "@/components/common/Title";
import Split from "@/components/layout/Split";
import { GET } from "@/libs/api";
import { Flex, WidthBox } from "@/styles/common";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const response = await GET("/recipes");
      console.log(response);
      setRecipes(response);
    } catch (error) {
      console.log("🚀 ~ getRecipes ~ error:", error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <Split
      left={<SideNav />}
      right={<RecipesWrap recipes={recipes} />}
      size={[2, 4]}
    />
  );
}

function SideNav() {
  return (
    <Flex gap={"50"} center>
      <Title icon={"🍽️"} title={"레시피 목록"} />
      <WidthBox width={"50"}>{/* 요리 종류별 필터링 체크박스 */}</WidthBox>
    </Flex>
  );
}
