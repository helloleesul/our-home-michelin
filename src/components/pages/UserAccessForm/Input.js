import React from "react";
import { InputContainer, Label, UserInput, Button } from "./Input.style";

function Input(props) {
  const { text, showBtn, index, buttonText } = props;
  return (
    <InputContainer>
      <Label htmlFor="email">{text}</Label>
      <UserInput
        type="text"
        id="email"
        placeholder={`${text}을 입력해주세요.`}
      ></UserInput>
      {showBtn && (index === 2 || index === 3) && <Button>{buttonText}</Button>}
    </InputContainer>
  );
}

export default Input;
