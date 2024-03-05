import Title from "@/components/common/Title";
import { Flex } from "@/styles/common";

export default function Home() {
  return (
    <Flex gap={"40"}>
      <Title icon={"🏆"} title={"마스터 셰프"} />
      <Title icon={"✨🍳"} title={"인기 레시피"} />
    </Flex>
  );
}
