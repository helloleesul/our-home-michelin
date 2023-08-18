import React from "react";
import UserAccessForm from "../components/pages/UserAccessForm/UserAccessForm";
function Join(props) {
  const customInputs = [
    { label: "이름" },
    { label: "닉네임" },
    { label: "이메일" },
    { label: "인증번호" },
    { label: "비밀번호" },
    { label: "비밀번호 확인" },
  ];
  const heightValue = true;
  const paddingBottom = true;
  const Text = "회원가입";
  const subText = "계정이 이미 있으신가요? 로그인 하러가기";
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

export default Join;
