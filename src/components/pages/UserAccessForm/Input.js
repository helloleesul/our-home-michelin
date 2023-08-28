import React, { useMemo, forwardRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { InputContainer, Label, UserInput, Button } from "./Input.style";
import axios from "axios";

const isVisibleIndex = [1, 2];
let inputType = "";
let placeholderText = "";

const Input = forwardRef((props, ref) => {
  const { text, showBtn, index, onInputChange, email, code } = props;
  const [time, setTime] = useState(80);
  const [timeStart, setTimeStart] = useState(false);
  const location = useLocation();
  const btnText = index === 1 ? "인증번호" : "인증확인";

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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const secondsRemaining = time % 60;
    return `${String(minutes).padStart(2, "0")} : ${String(
      secondsRemaining
    ).padStart(2, "0")}`;
  };
  useEffect(() => {
    if (timeStart) {
      const timeInterval = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => {
        clearInterval(timeInterval);
      };
    }
    if (time === 0) {
      alert("인증 시간이 초과되었습니다.");
      setTime(80);
      setTimeStart(false);
    }
  }, [timeStart, time]);
  const handleMail = async () => {
    if (index === 1) {
      if (timeStart) {
        return;
      }
      try {
        const response = await axios.post("/api/request", {
          email: email,
        });
        if (response.data) {
          setTimeStart(true);
          alert(response.data);
        }
      } catch (error) {
        if (!email.length) {
          alert("이메일 입력해주세요.");
        } else {
          alert("이메일 형식으로 입력해 주세요.");
        }
      }
    } else {
      try {
        const response = await axios.post("/api/verify", {
          email: email,
          code: code,
        });
        if (response.data) {
          // 토큰 인증 성공 후 실행 로직
          alert("인증성공");
          console.log("인증성공");
          setTimeStart(false);
          setTime(80);
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
      ></UserInput>
      {buttonVisible && (
        <Button onClick={handleMail}>
          {timeStart ? formatTime(time) : btnText}
        </Button>
      )}
    </InputContainer>
  );
});

export default Input;
