/** @jsxImportSource @emotion/react */
import { ErrorText, Flex } from "@/styles/common";
import FormWrap from "../FormWrap";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useEffect, useState } from "react";
import VALIDATE from "@/libs/constants/validate";
import { PATCH } from "@/libs/api";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, updateUser } from "@/libs/store/authSlice";
import MESSAGE from "@/libs/constants/message";

export default function InfoForm() {
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const [nickName, setNickName] = useState(user.nickName);
  const [nickNameValid, setNickNameValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordChk, setPasswordChk] = useState("");

  useEffect(() => {
    setNickNameValid(VALIDATE.USER.NICKNAME.test(nickName));
  }, [nickName]);

  const handleNickName = (e) => {
    setNickNameValid(VALIDATE.USER.NICKNAME.test(e.target.value));
    setNickName(e.target.value);
  };
  const handlePassword = (e) => {
    setPasswordValid(VALIDATE.USER.PASSWORD.test(e.target.value));
    setPassword(e.target.value);
  };
  const handlePasswordChk = (e) => setPasswordChk(e.target.value);

  const onInfoModify = async (e) => {
    e.preventDefault();

    if (
      // 비밀번호 불일치
      (password && password !== passwordChk) ||
      // 비밀번호 유효성검사 실패
      (password && !passwordValid) ||
      // 닉네임 유효성검사 실패
      (nickName && !nickNameValid) ||
      // 작성 정보 없을 때
      (!nickName && !password && !passwordChk)
    ) {
      alert(MESSAGE.CONFIRM.SYNTAX);
      return;
    }

    if (
      // 현재 닉네임과 동일할 때
      nickName === user.nickName &&
      !password
    ) {
      alert(MESSAGE.CONFIRM.NICKNAME);
      return;
    }

    try {
      const response = await PATCH("/myinfo", { nickName, password });

      dispatch(updateUser({ ...user, nickName: response.nickName }));
      setNickName(response.nickName);
      setPassword("");
      setPasswordChk("");

      alert(MESSAGE.CONFIRM.COMPLETE);
    } catch (error) {
      console.log("🚀 ~ onInfoModify ~ error:", error);
      alert(error.response.data.error);
    }
  };

  return (
    <FormWrap onSubmit={onInfoModify}>
      <Flex gap={"20"}>
        <div>
          <Input
            id={"email"}
            label={"이메일"}
            placeholder={"Email"}
            value={user.email}
            disabled
            readOnly
          />
        </div>
        <div>
          <Input
            id={"nickName"}
            value={nickName}
            onChange={handleNickName}
            label={"닉네임"}
            placeholder={"NickName"}
          />
        </div>
        {nickName && !nickNameValid && (
          <span css={ErrorText}>{MESSAGE.JOIN.SYNTAX_NICKNAME}</span>
        )}
        <div>
          <Input
            value={password}
            onChange={handlePassword}
            id={"password"}
            type={"password"}
            label={"비밀번호"}
            placeholder={"Password"}
          />
        </div>
        {password && !passwordValid && (
          <span css={ErrorText}>{MESSAGE.JOIN.SYNTAX_PASSWORD}</span>
        )}
        <div>
          <Input
            value={passwordChk}
            onChange={handlePasswordChk}
            id={"passwordCheck"}
            type={"password"}
            label={"비밀번호 확인"}
            placeholder={"Password Check"}
          />
        </div>
        {password !== passwordChk && (
          <span css={ErrorText}>{MESSAGE.JOIN.SYNTAX_PASSWORD_CHECK}</span>
        )}
        <Button type={"submit"} value={"정보 수정"} />
      </Flex>
    </FormWrap>
  );
}
