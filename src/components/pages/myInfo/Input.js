import React, { useState } from "react";
import * as S from "./Input.style";

function Input(props) {
  const { text, type, placeholder, showBtn, onChange } = props;
  const [btnText, setBtnText] = useState("변경하기");
  const [readOnly, setReadOnly] = useState(true);
  const [showInput, setShowInput] = useState(false);

  const handleButtonClick = () => {
    setReadOnly((readOnly) => !readOnly);
    setBtnText((btnText) => (btnText === "변경하기" ? "임시저장" : "변경하기"));
    if (text === "비밀번호") {
      alert("비밀번호 변경 버튼 클릭");
      setShowInput(true);
    }
  };

  return (
    <>
      <S.InputContainer>
        <S.Label>{text}</S.Label>
        <S.Input
          type={type}
          placeholder={placeholder}
          readOnly={readOnly}
          onChange={onChange}
        ></S.Input>
        {showBtn && <S.Button onClick={handleButtonClick}>{btnText}</S.Button>}
      </S.InputContainer>
      {showInput && (
        <S.InputContainer>
          <S.Label>{text} 확인</S.Label>
          <S.Input type={type}></S.Input>
        </S.InputContainer>
      )}
    </>
  );
}

export default Input;
