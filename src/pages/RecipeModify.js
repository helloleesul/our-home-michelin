import Title from "@/components/common/Title";
import RecipeForm from "@/components/recipe/RecipeForm";
import { Flex, WidthBox } from "@/styles/common";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RecipeModify() {
  const location = useLocation();
  const navigate = useNavigate();
  const recipeId = location.state;

  useEffect(() => {
    if (!recipeId) {
      navigate("/");
    }
  }, [navigate, recipeId]);

  return (
    <Flex gap={"30"} center>
      <Title icon={"🔥🧾🥣"} title={"레시피 수정"} />
      <p>Data received: {recipeId}</p>
      <WidthBox width={"70"}>
        <Flex center>{/* <RecipeForm /> */}</Flex>
      </WidthBox>
    </Flex>
  );
}
