import JoinForm from "../components/JoinForm";
import Title from "../components/common/Title";
import UserFormLayout from "../components/layout/UserFormLayout";
import { ButtonLink, FlexColumn } from "../styles/common";

export default function Join() {
  return (
    <FlexColumn gap={"30"}>
      <Title icon={"🧑‍🍳"} title={"회원가입"} />
      <UserFormLayout form={<JoinForm />}>
        <p>이미 우리집 냉슐랭 요리사이신가요?</p>
        <ButtonLink to="/login">로그인 하러가기</ButtonLink>
      </UserFormLayout>
    </FlexColumn>
  );
}
