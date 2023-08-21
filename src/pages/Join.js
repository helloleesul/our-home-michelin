import React from "react";
import UserAccessForm from "../components/pages/UserAccessForm/UserAccessForm";

const customInputs = [
  "이름",
  "닉네임",
  "이메일",
  "인증번호",
  "비밀번호",
  "비밀번호 확인",
];
const text = "회원가입";
const subText = "계정이 이미 있으신가요? 로그인 하러가기";
const showBtn = true;

function Join(props) {
  return (
    <UserAccessForm
      inputs={customInputs}
      text={text}
      subText={subText}
      showBtn={showBtn}
    />
  );
}

export default Join;
