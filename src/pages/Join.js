import JoinForm from "../components/JoinForm";
import Title from "../components/common/Title";
import { ColumnCenter } from "../styles/common";

export default function Join() {
  return (
    <ColumnCenter gap={"30"}>
      <Title icon={"🧑‍🍳"} title={"회원가입"} />
      <JoinForm />
    </ColumnCenter>
  );
}
