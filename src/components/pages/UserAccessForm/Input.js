import React from "react";
import { InputContainer, Label, UserInput } from "./Input.style";

function Input(props) {
  const { text } = props;
  return (
    <InputContainer>
      <Label htmlFor="email">{text}</Label>
      <UserInput
        type="text"
        id="email"
        placeholder={`${text}을 입력해주세요.`}
      />
    </InputContainer>
  );
}

export default Input;
