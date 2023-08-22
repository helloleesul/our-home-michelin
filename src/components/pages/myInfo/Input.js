import React, { useState } from "react";
import * as S from "./Input.style";

function Input(props) {
  const { text, type, placeholder, showBtn } = props;
  const [btnText, setBtnText] = useState("변경");
  const [readOnly, setReadOnly] = useState(true);

  const handleButtonClick = () => {
    setReadOnly((readOnly) => !readOnly);
    setBtnText((btnText) => (btnText === "변경" ? "저장" : "변경"));
  };
  return (
    <>
      <S.InputContainer>
        <S.Label>{text}</S.Label>
        <S.Input
          type={type}
          placeholder={placeholder}
          readOnly={readOnly}
        ></S.Input>
        {showBtn && <S.Button onClick={handleButtonClick}>{btnText}</S.Button>}
      </S.InputContainer>
    </>
  );
}

export default Input;
