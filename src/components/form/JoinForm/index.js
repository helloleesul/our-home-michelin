/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import {
  AbsoluteText,
  ColGroup,
  ErrorText,
  Flex,
  RelativeGroup,
} from "@/styles/common";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import FormWrap from "@/components/form/FormWrap";
import VALIDATE from "@/libs/constants/validate";
import MESSAGE from "@/libs/constants/message";
import { POST } from "@/libs/api";
import STATUS_CODE from "@/libs/constants/statusCode";
import { useNavigate } from "react-router-dom";

export default function JoinForm() {
  const [codeRequest, setCodeRequest] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [code, setCode] = useState("");
  const [codeValid, setCodeValid] = useState(false);
  const [nickName, setNickName] = useState("");
  const [nickNameValid, setNickNameValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordChk, setPasswordChk] = useState("");

  useEffect(() => {
    if (!codeRequest) {
      setCount(0);
      return;
    }
    setCount(180);
    const timer = setInterval(() => {
      setCount((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setCodeRequest(false);
        }
        return prevTime - 1;
      });
    }, 1000);
  }, [codeRequest]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const countSeconds = seconds % 60;
    return `${minutes}:${String(countSeconds).padStart(2, 0)}`;
  };

  const handleEmail = (e) => {
    setEmailValid(VALIDATE.USER.EMAIL.test(e.target.value));
    setEmail(e.target.value);
  };
  const handleCode = (e) => setCode(e.target.value);
  const handleNickName = (e) => {
    setNickNameValid(VALIDATE.USER.NICKNAME.test(e.target.value));
    setNickName(e.target.value);
  };
  const handlePassword = (e) => {
    setPasswordValid(VALIDATE.USER.PASSWORD.test(e.target.value));
    setPassword(e.target.value);
  };
  const handlePasswordChk = (e) => setPasswordChk(e.target.value);

  const onCodeRequest = async () => {
    try {
      await POST("/request", { email });
      console.log("🚀 ~ onCodeRequest ~ click:", "인증코드 요청 성공");
      setCodeRequest(true);
    } catch (error) {
      console.log("🚀 ~ handleLogout ~ error:", error);
    }
  };
  const onCodeVerify = async () => {
    try {
      const response = await POST("/verify", { email, code });
      console.log("🚀 ~ onCodeVerify ~ response:", response);

      if (!response.status === STATUS_CODE.OK) {
        throw new Error("인증 확인에 실패했습니다.");
      }

      alert(response.message);
      setCodeRequest(false);
      setCodeValid(true);
    } catch (error) {
      console.log("🚀 ~ handleLogout ~ error:", error);
      alert(error.response.data.error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !code || !nickName || !password || !passwordChk) {
      alert("정보를 모두 입력해주세요!");
      return;
    }
    if (!emailValid || !codeValid || !nickNameValid || !passwordValid) return;

    try {
      const response = await POST("/join", { email, nickName, password });

      alert(response.message);
      navigate("/login");
    } catch (error) {
      console.log("🚀 ~ handleLogout ~ error:", error);
      alert(error.response.data.error);
    }
  };
  return (
    <FormWrap width={"90"} onSubmit={onSubmit}>
      <Flex gap={"20"}>
        <ColGroup gap={"10"}>
          <Input
            value={email}
            onChange={handleEmail}
            id={"email"}
            label={"이메일"}
            placeholder={"Email"}
          />
          <Button
            onClick={onCodeRequest}
            width={"100"}
            type={"button"}
            value={"인증코드"}
            disabled={codeRequest || !emailValid}
          />
        </ColGroup>
        {email && !emailValid && (
          <span css={ErrorText}>{MESSAGE.JOIN.SYNTAX_EMAIL}</span>
        )}
        <ColGroup gap={"10"}>
          <div css={RelativeGroup}>
            <Input
              value={code}
              onChange={handleCode}
              id={"code"}
              label={"인증코드"}
              placeholder={"Code"}
            />
            {codeRequest && <span css={AbsoluteText}>{formatTime(count)}</span>}
          </div>
          <Button
            onClick={onCodeVerify}
            width={"100"}
            type={"button"}
            value={"확인"}
          />
        </ColGroup>
        <div>
          <Input
            value={nickName}
            onChange={handleNickName}
            id={"nickName"}
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
            id={"password"}
            type={"password"}
            label={"비밀번호"}
            onChange={handlePassword}
            placeholder={"Password"}
          />
        </div>
        {password && !passwordValid && (
          <span css={ErrorText}>{MESSAGE.JOIN.SYNTAX_PASSWORD}</span>
        )}
        <div>
          <Input
            value={passwordChk}
            id={"passwordCheck"}
            type={"password"}
            label={"비밀번호 확인"}
            onChange={handlePasswordChk}
            placeholder={"Password Check"}
          />
        </div>
        {password !== passwordChk && (
          <span css={ErrorText}>{MESSAGE.JOIN.SYNTAX_PASSWORD_CHECK}</span>
        )}
        <Button type={"submit"} value={"회원가입"} />
      </Flex>
    </FormWrap>
  );
}
