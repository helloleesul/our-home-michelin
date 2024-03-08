import Title from "@/components/common/Title";
import RecipeForm from "@/components/recipe/RecipeForm";
import { Flex, WidthBox } from "@/styles/common";

export default function RecipeWrite() {
  return (
    <Flex gap={"30"} center>
      <Title icon={"🔥🧾🥣"} title={"새 레시피"} />
      <WidthBox width={"70"}>
        <Flex center>
          <RecipeForm />
        </Flex>
      </WidthBox>
    </Flex>
  );
}
