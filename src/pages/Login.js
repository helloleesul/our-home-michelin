import React from "react";
import UserAccessForm from "../components/pages/UserAccessForm/UserAccessForm";
function Login(props) {
  const customInputs = [{ label: "이메일" }, { label: "비밀번호" }];
  const heightValue = false;
  const paddingBottom = false;
  const Text = "로그인";
  const subText = "회원가입";
  return (
    <UserAccessForm
      inputs={customInputs}
      paddingBottom={paddingBottom}
      height={heightValue}
      Text={Text}
      subText={subText}
    />
  );
}

export default Login;
