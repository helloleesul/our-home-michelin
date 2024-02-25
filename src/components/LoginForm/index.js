import { ButtonLink, ColumnCenter, Form, WidthBox } from "../../styles/common";

export default function LoginForm() {
  return (
    <ColumnCenter gap={"30"}>
      <WidthBox width={"50"}>
        <Form>LoginForm</Form>
      </WidthBox>
      <ColumnCenter gap={"10"}>
        <p>우리집 냉슐랭 요리사가 아니신가요?</p>
        <ButtonLink>회원가입 하러가기</ButtonLink>
      </ColumnCenter>
    </ColumnCenter>
  );
}
