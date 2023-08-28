import React, { useMemo, forwardRef } from "react";
import { useLocation } from "react-router-dom";
import { InputContainer, Label, UserInput, Button } from "./Input.style";
import axios from "axios";

const isVisibleIndex = [1, 2];

const Input = forwardRef((props, ref) => {
  const {
    text,
    showBtn,
    index,
    onInputChange,
    email,
    code,
    time,
    setTime,
    timeStart,
    setTimeStart,
  } = props;

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

  const btnText = index === 1 ? "인증번호" : "인증확인";

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const secondsRemaining = time % 60;
    return `${String(minutes).padStart(2, "0")} : ${String(
      secondsRemaining
    ).padStart(2, "0")}`;
  };

  const handleMail = async () => {
    if (index === 1) {
      if (timeStart) {
        return;
      }
      try {
        const response = await axios.post("/api/request", { email });
        if (response.data) {
          setTimeStart(true);
          alert(response.data);
        }
      } catch (error) {
        console.log(error.response.data.error);
      }
    } else {
      try {
        const response = await axios.post("/api/verify", { email, code });
        if (response.status === 200) {
          alert("인증성공");
          setTime(15);
          setTimeStart(false);
        }
      } catch (error) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <InputContainer>
      <Label htmlFor={text}>{text}</Label>
      <UserInput
        type={inputType}
        id={text}
        placeholder={placeholderText}
        onChange={handleInputChange}
        ref={ref}
      />
      {buttonVisible && (
        <Button onClick={handleMail}>
          {index === 1 && timeStart ? formatTime(time) : btnText}
        </Button>
      )}
    </InputContainer>
  );
});

export default Input;
