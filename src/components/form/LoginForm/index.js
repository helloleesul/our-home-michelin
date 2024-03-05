import { Flex } from "@/styles/common";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import FormWrap from "@/components/common/FormWrap";

export default function LoginForm({ refs }) {
  const { emailRef, passwordRef } = refs;

  return (
    <FormWrap width={"70"}>
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
    </FormWrap>
  );
}
