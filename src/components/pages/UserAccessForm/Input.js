import React, { useMemo, forwardRef } from "react";
import { useLocation } from "react-router-dom";
import { InputContainer, Label, UserInput, Button } from "./Input.style";

const isVisibleIndex = [1, 2];
const Input = forwardRef((props, ref) => {
  const { text, showBtn, index, buttonText, onInputChange, handleMail } = props;

  const location = useLocation();

  let inputType = "";
  let placeholderText = "";
  if (location.pathname === "/login") {
    inputType = index === 1 ? "password" : "text";
  } else {
    inputType = index === 3 || index === 4 ? "password" : "text";
    placeholderText =
      index === 0 ? "닉네임 2글자 이상 입력해주세요." : `${text} 입력해주세요.`;
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
        placeholder={placeholderText}
        onChange={handleInputChange}
        ref={ref} // ref 전달
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
});

export default Input;
