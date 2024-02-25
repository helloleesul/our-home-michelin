/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../styles/theme";

import { ButtonGroup, FlexColumn } from "../../styles/common";
import Button from "../common/Button";
import Input from "../common/Input";
import FormLayout from "../layout/FormLayout";

export default function JoinForm() {
  return (
    <FormLayout width={"90"}>
      <FlexColumn gap={"20"}>
        <div>
          <ButtonGroup gap={"10"}>
            <Input id={"email"} label={"이메일"} placeholder={"Email"} />
            <Button width={"100"} type={"button"} value={"인증코드"} />
          </ButtonGroup>
          {/* <span>error</span> */}
        </div>
        <ButtonGroup gap={"10"}>
          <div css={CodeGroup}>
            <Input id={"code"} label={"인증코드"} placeholder={"Code"} />
            <span css={Count}>3:00</span>
          </div>
          <Button width={"100"} type={"button"} value={"확인"} />
        </ButtonGroup>
        <div>
          <Input id={"nickName"} label={"닉네임"} placeholder={"NickName"} />
        </div>
        <div>
          <Input id={"password"} label={"비밀번호"} placeholder={"Password"} />
        </div>
        <div>
          <Input
            id={"passwordCheck"}
            label={"비밀번호 확인"}
            placeholder={"Password Check"}
          />
        </div>
        <Button type={"submit"} value={"회원가입"} />
      </FlexColumn>
    </FormLayout>
  );
}

const CodeGroup = css`
  flex: 1;
  position: relative;
`;
const Count = css`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: ${theme.PALETTE.mainColor};
`;