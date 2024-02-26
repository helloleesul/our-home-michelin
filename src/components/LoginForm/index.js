import { Flex } from "../../styles/common";
import Button from "../common/Button";
import Input from "../common/Input";
import FormLayout from "../layout/FormLayout";

export default function LoginForm({ refs }) {
  const { emailRef, passwordRef } = refs;

  return (
    <FormLayout width={"70"}>
      <Flex gap={"20"}>
        <Input
          type={"email"}
          id={"email"}
          label={"이메일"}
          placeholder={"Email"}
          ref={emailRef}
        />
        <Input
          type={"password"}
          id={"password"}
          label={"비밀번호"}
          placeholder={"Password"}
          ref={passwordRef}
        />
        <Button type={"submit"} value={"로그인"} />
      </Flex>
    </FormLayout>
  );
}
