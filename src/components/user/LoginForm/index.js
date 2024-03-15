import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { asyncLogin } from "@/libs/store/authSlice";

import { Flex } from "@/styles/common";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import FormWrap from "@/components/common/FormWrap";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const onLogin = async (e) => {
    e.preventDefault();

    if (!emailRef.current.value || !passwordRef.current.value) {
      alert("로그인 정보를 입력해주세요.");
      !passwordRef.current.value && passwordRef.current.focus();
      !emailRef.current.value && emailRef.current.focus();

      return;
    }

    dispatch(
      asyncLogin({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
    navigate("/");
  };

  return (
    <FormWrap width={"70"} onSubmit={onLogin}>
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
