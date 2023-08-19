import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { InputContainer, Label, UserInput, Button } from "./Input.style";

function Input(props) {
  const { text, showBtn, index, buttonText } = props;

  const location = useLocation();

  let inputType = "";
  if (location.pathname === "/login") {
    inputType = index === 1 ? "password" : "text";
  } else {
    inputType = index === 4 || index === 5 ? "password" : "text";
  }

  return (
    <InputContainer>
      <Label htmlFor={text}>{text}</Label>
      <UserInput
        type={inputType}
        id={text}
        placeholder={`${text}을 입력해주세요.`}
      ></UserInput>
      {showBtn && (index === 2 || index === 3) && <Button>{buttonText}</Button>}
    </InputContainer>
  );
}

export default Input;
