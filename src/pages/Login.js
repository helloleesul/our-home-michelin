import React from "react";
import UserAccessForm from "../components/pages/UserAccessForm/UserAccessForm";
function Login(props) {
  const customInputs = [{ label: "이메일" }, { label: "비밀번호" }];

  const Text = "로그인";
  const subText = "회원가입";
  const showBtn = false;
  return (
    <UserAccessForm
      inputs={customInputs}
      Text={Text}
      subText={subText}
      showBtn={showBtn}
    />
  );
}

export default Login;
