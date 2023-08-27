import React, { useState } from "react";
import * as S from "./Input.style";

function Input(props) {
  const {
    text,
    type,
    placeholder,
    showBtn,
    onChange,
    value,
    onBtnClick,
    readOnly,
  } = props;
  const [btnText, setBtnText] = useState("변경하기");
  const [read, setRead] = useState(readOnly);
  const handleButtonClick = () => {
    setBtnText((btnText) => (btnText === "변경하기" ? "임시저장" : "변경하기"));
    setRead(!read);
    if (text === "비밀번호") {
      onBtnClick();
      setRead(!read);
    }
  };

  return (
    <>
      <S.InputContainer>
        <S.Label>{text}</S.Label>
        <S.Input
          type={type}
          placeholder={placeholder}
          readOnly={read}
          onChange={onChange}
          value={value}
        ></S.Input>
        {showBtn && <S.Button onClick={handleButtonClick}>{btnText}</S.Button>}
      </S.InputContainer>
    </>
  );
}

export default Input;
