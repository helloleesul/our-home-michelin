import LoginForm from "../components/LoginForm";
import Title from "../components/common/Title";
import UserFormLayout from "../components/layout/UserFormLayout";
import { ButtonLink, Flex } from "../styles/common";
import STATUS_CODE from "../libs/constants/statusCode";
import { POST } from "../libs/api";
import { useRef } from "react";

export default function Login() {
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

    try {
      const response = await POST("/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      if (!response.status === STATUS_CODE.OK) {
        throw new Error("로그인에 실패했습니다.");
      }

      console.log("로그인 성공!");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <Flex gap={"30"} onSubmit={onLogin}>
      <Title icon={"🧑‍🍳"} title={"로그인"} />
      <UserFormLayout form={<LoginForm refs={{ emailRef, passwordRef }} />}>
        <p>우리집 냉슐랭 요리사가 아니신가요?</p>
        <ButtonLink to="/join">회원가입 하러가기</ButtonLink>
      </UserFormLayout>
    </Flex>
  );
}
