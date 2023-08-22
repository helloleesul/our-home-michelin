import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./UserAccessForm.style";
import chef1 from "../../../assets/img/chef1.png";
import Input from "./Input";

function UserAccessForm(props) {
  const { inputs, text, subText, showBtn } = props;

  const [inputValues, setInputValues] = useState([]);
  const [token, setToken] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handlePageNavigation = () => {
    if (location.pathname === "/login") {
      navigate("/join");
    } else {
      navigate("/login");
    }
  };

  const handleClick = async () => {
    if (location.pathname === "/login") {
      try {
        const response = await axios.post("/api/login/", {
          email: inputValues[0],
          password: inputValues[1],
        });
        if (response.data) {
          setToken(response.data.token);
          navigate("/");
        }
      } catch (error) {
        console.error("에러:", error);
        if (error.response.data.error) {
          alert(error.response.data.error);
        } else {
          alert("로그인 정보를 입력해주세요.");
        }
      }
    } else {
      try {
        const response = await axios.post("api/join/", {
          nickName: inputValues[0],
          email: inputValues[1],
          password: inputValues[3],
        });
        if (response.data) {
          alert("회원가입 성공");
        }
      } catch (error) {
        console.error("에러:", error);
        if (error.response) {
          alert("모든 정보를 입력해주세요.");
        }
        console.log("서버 응답 데이터:", error.response.data);
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

  // const handleMail = async (email) => {
  //   try {
  //     const response = await axios.post("/api/join", {
  //       email: inputValues[1],
  //     });
  //     console.log(response.data.message);
  //   } catch (error) {
  //     console.error("에러:", error);
  //   }
  // };

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
            buttonText={
              index === 1 ? "인증번호" : index === 2 ? "인증확인" : ""
            }
            onInputChange={(index, value) => handleInputChange(index, value)}
          />
        ))}

        <S.Btn onClick={handleClick}>{text}</S.Btn>
        <S.Text fontSize="13px" onClick={handlePageNavigation}>
          {subText}
        </S.Text>
      </S.InputContainer>
    </S.Container>
  );
}

export default UserAccessForm;
