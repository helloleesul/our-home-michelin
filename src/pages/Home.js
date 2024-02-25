import Title from "../components/common/Title";
import { FlexColumn } from "../styles/common";

export default function Home() {
  return (
    <FlexColumn gap={"40"}>
      <Title icon={"🏆"} title={"마스터 셰프"} />
      <Title icon={"✨🍳"} title={"인기 레시피"} />
    </FlexColumn>
  );
}
