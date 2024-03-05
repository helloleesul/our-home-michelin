/** @jsxImportSource @emotion/react */
import { AbsoluteText, ColGroup, Flex, RelativeGroup } from "@/styles/common";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import FormWrap from "@/components/common/FormWrap";

export default function JoinForm() {
  return (
    <FormWrap width={"90"}>
      <Flex gap={"20"}>
        <ColGroup gap={"10"}>
          <Input id={"email"} label={"이메일"} placeholder={"Email"} />
          <Button width={"100"} type={"button"} value={"인증코드"} />
          {/* <span>error</span> */}
        </ColGroup>
        <ColGroup gap={"10"}>
          <div css={RelativeGroup}>
            <Input id={"code"} label={"인증코드"} placeholder={"Code"} />
            <span css={AbsoluteText}>3:00</span>
          </div>
          <Button width={"100"} type={"button"} value={"확인"} />
        </ColGroup>
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
      </Flex>
    </FormWrap>
  );
}
