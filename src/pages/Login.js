import LoginForm from "@/components/form/LoginForm";
import Title from "@/components/common/Title";
import UserForm from "@/components/form/UserForm";
import { ButtonLink, Flex } from "@/styles/common";

export default function Login() {
  return (
    <Flex gap={"30"}>
      <Title icon={"🧑‍🍳"} title={"로그인"} />
      <UserForm form={<LoginForm />}>
        <p>우리집 냉슐랭 요리사가 아니신가요?</p>
        <ButtonLink to="/join">회원가입 하러가기</ButtonLink>
      </UserForm>
    </Flex>
  );
}
