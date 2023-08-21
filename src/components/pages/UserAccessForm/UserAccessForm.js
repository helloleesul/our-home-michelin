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
      alert("로그인 버튼 클릭");
      console.log(inputValues);
      try {
        const response = await axios.post("http://localhost:3001/api/login/", {
          email: inputValues[0],
          password: inputValues[1],
        });
        if (response.data.success) {
          setToken(response.data.token);
        }
        console.log("서버 응답:", response.data);
      } catch (error) {
        console.error("에러:", error);
      }
    } else {
      alert("회원가입 버튼 클릭");
      console.log(inputValues);
      try {
        const response = await axios.post("http://localhost:3001/api/login/", {
          name: inputValues[0],
          nickname: inputValues[1],
          email: inputValues[2],
          password: inputValues[4],
          password: inputValues[5],
        });
        if (response.data.success) {
          setToken(response.data.token);
        }
        console.log("서버 응답:", response.data);
      } catch (error) {
        console.error("에러:", error);
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
            buttonText={
              index === 2 ? "인증번호" : index === 3 ? "인증확인" : ""
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
