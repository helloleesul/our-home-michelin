import LoginForm from "../components/LoginForm";
import Title from "../components/common/Title";
import { ColumnCenter } from "../styles/common";

export default function Login() {
  return (
    <ColumnCenter gap={"30"}>
      <Title icon={"🧑‍🍳"} title={"로그인"} />
      <LoginForm />
    </ColumnCenter>
    // <SplitLayout
    //   left={<Title icon={"🧑‍🍳"} title={"로그인"} />}
    //   right={<LoginForm />}
    //   size={[2, 4]}
    // />
  );
}
