import LoginForm from "../components/LoginForm";
import Title from "../components/common/Title";
import UserFormLayout from "../components/layout/UserFormLayout";
import { ButtonLink, FlexColumn } from "../styles/common";

export default function Login() {
  return (
    <FlexColumn gap={"30"}>
      <Title icon={"🧑‍🍳"} title={"로그인"} />
      <UserFormLayout form={<LoginForm />}>
        <p>우리집 냉슐랭 요리사가 아니신가요?</p>
        <ButtonLink to="/join">회원가입 하러가기</ButtonLink>
      </UserFormLayout>
    </FlexColumn>
    // <SplitLayout
    //   left={<Title icon={"🧑‍🍳"} title={"로그인"} />}
    //   right={<LoginForm />}
    //   size={[2, 4]}
    // />
  );
}
