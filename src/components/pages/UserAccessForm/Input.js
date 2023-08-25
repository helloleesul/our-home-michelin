import React, { useMemo, forwardRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { InputContainer, Label, UserInput, Button } from "./Input.style";
import axios from "axios";

const isVisibleIndex = [1, 2];
const Input = forwardRef((props, ref) => {
  const { text, showBtn, index, onInputChange } = props;
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
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
    if (location.pathname === "/join" && index === 1) {
      const newEmail = e.target.value;
      setEmail(newEmail);
    }
    if (location.pathname === "/join" && index === 2) {
      const newCode = e.target.value;
      setCode(newCode);
    }
    const newValue = e.target.value;
    onInputChange(index, newValue);
  };
  const btnText = index === 1 ? "인증번호" : "인증확인";
  const [time, setTime] = useState(180);
  const [timeStart, setTimeStart] = useState(false);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const secondsRemaining = time % 60;
    return `${String(minutes).padStart(2, "0")} : ${String(
      secondsRemaining
    ).padStart(2, "0")}`;
  };
  useEffect(() => {
    if (timeStart && time > 0) {
      const timeInterval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearInterval(timeInterval);
      };
    }
    if (time === 0) {
      alert("인증 시간이 초과되었습니다.");
      setTime(180);
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
        }
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data.error);
      }
    } else {
      try {
        const response = await axios.post("/api/verify", {
          email: email,
          code: code,
        });
        if (response.data) {
          console.log("성공");
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
          {timeStart && time > 0 ? formatTime(time) : btnText}
        </Button>
      )}
    </InputContainer>
  );
});

export default Input;
