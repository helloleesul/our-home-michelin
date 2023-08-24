import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { InputContainer, Label, UserInput, Button } from "./Input.style";

const isVisibleIndex = [1, 2];

function Input(props) {
  const { text, showBtn, index, buttonText, onInputChange, handleMail } = props;

  const location = useLocation();

  let inputType = "";
  if (location.pathname === "/login") {
    inputType = index === 1 ? "password" : "text";
  } else {
    inputType = index === 3 || index === 4 ? "password" : "text";
  }

  const buttonVisible = useMemo(
    () => showBtn && isVisibleIndex.includes(index),
    [showBtn, index]
  );

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    onInputChange(index, newValue);
  };

  return (
    <InputContainer>
      <Label htmlFor={text}>{text}</Label>
      <UserInput
        type={inputType}
        id={text}
        placeholder={`${text}을 입력해주세요.`}
        onChange={handleInputChange}
      ></UserInput>
      {buttonVisible && (
        <Button
          onClick={() => {
            alert("인증번호 버튼 클릭");
            console.log(index);
          }}
        >
          {buttonText}
        </Button>
      )}
    </InputContainer>
  );
}

export default Input;
