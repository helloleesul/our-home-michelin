import JoinForm from "@/components/user/JoinForm";
import Title from "@/components/@common/Title";
import UserForm from "@/components/user/UserForm";
import { ButtonLink, Center, Flex } from "@/styles/common";

export default function Join() {
  return (
    <Center>
      <Flex gap={"30"}>
        <Title
          icon={"🧑‍🍳"}
          title={"회원가입"}
          type={"primary"}
          position={"center"}
        />
        <UserForm form={<JoinForm />}>
          <p>이미 우리집 냉슐랭 요리사이신가요?</p>
          <ButtonLink to="/login">로그인 하러가기</ButtonLink>
        </UserForm>
      </Flex>
    </Center>
  );
}
