/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, updateUser } from "@/libs/store/authSlice";

import { ErrorText, Flex } from "@/styles/common";

import Input from "@/components/@common/Input";
import Button from "@/components/@common/Button";
import ImageInput from "@/components/@common/ImageInput";
import { PATCH } from "@/libs/api";
import VALIDATE from "@/libs/constants/validate";
import MESSAGE from "@/libs/constants/message";
import { PROFILE_UPLOAD_IMG } from "@/libs/constants/defaultImages";
import AWS from "aws-sdk";

import * as S from "./style";

export default function InfoForm() {
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const [file, setFile] = useState("");
  const [profileImageURL, setProfileImageURL] = useState(user.profileImageURL);
  const [nickName, setNickName] = useState(user.nickName);
  const [nickNameValid, setNickNameValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordChk, setPasswordChk] = useState("");

  AWS.config.update({
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  });

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

    const now = new Date();
    const getMilliseconds = now.getTime();
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: "our-home-michelin-bucket/upload",
        Key: `${getMilliseconds + "_" + file?.name}`,
        Body: file,
      },
    });

    // 작성 정보 없음
    if (!nickName && !password && !passwordChk) {
      setNickName(user.nickName);
      alert(MESSAGE.CONFIRM.ALL);
      return;
    }

    // 현재 닉네임과 동일
    if (
      nickName === user.nickName &&
      profileImageURL === user.profileImageURL &&
      (!password || !passwordChk)
    ) {
      alert(MESSAGE.CONFIRM.NICKNAME);
      return;
    }

    // 비밀번호 유효성검사 실패
    // 비밀번호 불일치
    if (
      (password && !passwordValid) ||
      (password && password !== passwordChk)
    ) {
      alert(MESSAGE.CONFIRM.PASSWORD);
      return;
    }

    try {
      const resultImage = file && (await upload.promise());
      const response = await PATCH("/myinfo", {
        nickName,
        password,
        profileImageURL: !profileImageURL
          ? ""
          : profileImageURL === user.profileImageURL
          ? profileImageURL
          : resultImage.Location.toString(),
      });

      dispatch(
        updateUser({
          ...user,
          nickName: response.nickName,
          profileImageURL: response.profileImageURL,
        })
      );
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
    <form onSubmit={onInfoModify} style={{ width: "60%" }}>
      <Flex gap={"20"}>
        <S.ProfileImage>
          <ImageInput
            defaultImage={profileImageURL}
            onChange={setProfileImageURL}
            handleFile={setFile}
            uploadImage={PROFILE_UPLOAD_IMG}
          />
        </S.ProfileImage>
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
        {!VALIDATE.USER.NICKNAME.test(nickName) &&
          nickName &&
          !nickNameValid && (
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
    </form>
  );
}
