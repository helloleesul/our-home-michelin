import * as S from "./UserAccessForm.style";
import chef1 from "../../../assets/img/chef1.png";
import Input from "./Input";
import React from "react";

function UserAccessForm(props) {
  const { inputs, height, paddingBottom, Text, subText } = props;
  console.log(props);
  return (
    <S.Container>
      <S.ChefImage src={chef1} alt="요리사캐릭터" />
      <S.InputContainer height={height ? 1 : 0}>
        <S.Text paddingBottom={paddingBottom ? 1 : 0}>{Text}</S.Text>

        {inputs.map((input, index) => (
          <Input key={index} text={input.label} />
        ))}

        <S.Btn>{Text}</S.Btn>
        <S.Text fontSize="13px">{subText}</S.Text>
      </S.InputContainer>
    </S.Container>
  );
}

export default UserAccessForm;
