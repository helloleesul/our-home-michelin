import React from "react";
import UserAccessForm from "../components/pages/UserAccessForm/UserAccessForm";

const customInputs = ["이메일", "비밀번호"];

function Login(props) {
  const text = "로그인";
  const subText = "회원가입";
  const showBtn = false;
  return (
    <UserAccessForm
      inputs={customInputs}
      text={text}
      subText={subText}
      showBtn={showBtn}
    />
  );
}

export default Login;
