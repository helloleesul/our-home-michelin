import Title from "../components/common/Title";
import SplitLayout from "../components/layout/SplitLayout";

export default function RecipeWrite() {
  return (
    <SplitLayout
      left={<Title icon={"📝"} title={"새 레시피"} />}
      right={<>RecipeWrite</>}
      size={[2, 4]}
    />
  );
}
