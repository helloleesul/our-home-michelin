import React from "react";
import * as S from "./Input.style";

function Input(props) {
  const { text, type, placeholder, showBtn } = props;
  console.log(type);
  return (
    <>
      <S.InputContainer>
        <S.Label>{text}</S.Label>
        <S.Input
          type="text"
          placeholder={placeholder}
          readOnly={false}
        ></S.Input>
        {showBtn && <S.Button>변경</S.Button>}
      </S.InputContainer>
    </>
  );
}

export default Input;
