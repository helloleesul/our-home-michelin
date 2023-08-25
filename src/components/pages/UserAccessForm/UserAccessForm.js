import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./UserAccessForm.style";
import chef1 from "../../../assets/img/chef1.png";
import Input from "./Input";

function UserAccessForm(props) {
  const { inputs, text, subText, showBtn } = props;

  const [inputValues, setInputValues] = useState(["", "", "", "", ""]);
  const location = useLocation();
  const navigate = useNavigate();

  const nicknameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handlePageNavigation = () => {
    const newPath = location.pathname === "/login" ? "/join" : "/login";
    navigate(newPath);
  };

  const validateNickname = (nickname) => {
    return nickname.length >= 2;
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const handleClick = async () => {
    try {
      if (location.pathname === "/login") {
        const response = await axios.post("/api/login/", {
          email: inputValues[0],
          password: inputValues[1],
        });
        if (response.data) {
          navigate("/");
        }
      } else {
        const nickname = inputValues[0];
        const email = inputValues[1];
        const password = inputValues[3];
        const confirmPassword = inputValues[4];

        if (!validateNickname(nickname)) {
          alert("닉네임을 2글자 이상 입력해주세요.");
          nicknameRef.current.focus();
          return;
        }

        if (!validateEmail(email)) {
          alert("유효한 이메일 주소를 입력해주세요.");
          emailRef.current.focus();
          return;
        }

        if (!validatePassword(password)) {
          alert("비밀번호를 6글자 이상 입력해주세요.");
          passwordRef.current.focus();
          return;
        }

        if (!validateConfirmPassword(password, confirmPassword)) {
          alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
          confirmPasswordRef.current.focus();
          return;
        }

        const response = await axios.post("api/join/", {
          nickName: inputValues[0],
          email: inputValues[1],
          password: inputValues[3],
        });

        if (response.data) {
          alert("회원가입 성공");
          navigate("/login");
        }
      }
    } catch (error) {
      console.error("에러:", error);
      if (error.response) {
        if (error.response.data.error) {
          alert(error.response.data.error);
        } else {
          alert("로그인 정보를 입력해주세요.");
        }
      }
    }
  };

  const handleInputChange = (index, value) => {
    setInputValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = value;
      return updatedValues;
    });
  };

  return (
    <S.Container>
      <S.ChefImage src={chef1} alt="요리사캐릭터" />
      <S.InputContainer>
        <S.Text style={{ cursor: "auto" }}>{text}</S.Text>

        {inputs.map((input, index) => (
          <Input
            key={index}
            text={input}
            showBtn={showBtn}
            index={index}
            onInputChange={(index, value) => handleInputChange(index, value)}
            ref={
              index === 0
                ? nicknameRef
                : index === 1
                ? emailRef
                : index === 3
                ? passwordRef
                : index === 4
                ? confirmPasswordRef
                : null
            }
          />
        ))}

        <S.Btn onClick={() => handleClick()}>{text}</S.Btn>
        <S.Text fontSize="13px" onClick={handlePageNavigation}>
          {subText}
        </S.Text>
      </S.InputContainer>
    </S.Container>
  );
}

export default UserAccessForm;
