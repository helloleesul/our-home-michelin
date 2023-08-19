import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./UserAccessForm.style";
import chef1 from "../../../assets/img/chef1.png";
import Input from "./Input";

function UserAccessForm(props) {
  const { inputs, Text, subText, showBtn } = props;

  const location = useLocation();
  const navigate = useNavigate();

  const handlePageNavigation = () => {
    if (location.pathname === "/login") {
      navigate("/join");
    } else {
      navigate("/login");
    }
  };
  return (
    <S.Container>
      <S.ChefImage src={chef1} alt="요리사캐릭터" />
      <S.InputContainer>
        <S.Text style={{ cursor: "auto" }}>{Text}</S.Text>

        {inputs.map((input, index) => (
          <Input
            key={index}
            text={input.label}
            showBtn={showBtn}
            index={index}
            buttonText={
              index === 2 ? "인증번호" : index === 3 ? "인증확인" : ""
            }
          />
        ))}

        <S.Btn>{Text}</S.Btn>
        <S.Text fontSize="13px" onClick={handlePageNavigation}>
          {subText}
        </S.Text>
      </S.InputContainer>
    </S.Container>
  );
}

export default UserAccessForm;
