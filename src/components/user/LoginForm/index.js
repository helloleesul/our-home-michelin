import { useRef } from "react";

import { useDispatch } from "react-redux";
import { asyncLogin } from "@/libs/store/authSlice";

import { Flex } from "@/styles/common";
import Button from "@/components/@common/Button";
import Input from "@/components/@common/Input";
import useModals from "@/libs/hooks/useModals";
import Alert from "@/components/modal/Alert";

export default function LoginForm() {
  const dispatch = useDispatch();
  const { openModal } = useModals();

  const emailRef = useRef();
  const passwordRef = useRef();

  const onLogin = async (e) => {
    e.preventDefault();

    if (!emailRef.current.value || !passwordRef.current.value) {
      openModal(Alert, {
        title: "안내",
        size: 30,
        message: "로그인 정보를 입력해주세요.",
      });
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
  };

  return (
    <form onSubmit={onLogin} style={{ width: "40%" }}>
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
    </form>
  );
}
