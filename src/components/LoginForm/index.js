import { FlexColumn, Form } from "../../styles/common";
import Button from "../common/Button";
import Input from "../common/Input";

export default function LoginForm() {
  return (
    <Form>
      <FlexColumn gap={"20"}>
        <Input id={"email"} label={"이메일"} placeholder={"Email"} />
        <Input id={"password"} label={"비밀번호"} placeholder={"Password"} />
        <Button type={"submit"} value={"로그인"} />
      </FlexColumn>
    </Form>
  );
}
