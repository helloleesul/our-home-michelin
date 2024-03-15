import { useRef } from "react";

import { useDispatch } from "react-redux";
import { asyncLogout } from "@/libs/store/authSlice";

import { Flex } from "@/styles/common";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import FormWrap from "@/components/common/FormWrap";

import { DELETE, POST } from "@/libs/api";
import MESSAGE from "@/libs/constants/message";
import { useNavigate } from "react-router-dom";

export const Mode = {
  MODIFY: "modify",
  LEAVE: "leave",
};

export default function ConfirmForm({ mode, onResult }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const passwordRef = useRef();

  const onConfirm = async (e) => {
    e.preventDefault();

    if (!passwordRef.current.value) return;

    try {
      if (mode === Mode.MODIFY) {
        const response = await POST("/confirm-password", {
          password: passwordRef.current.value,
        });
        alert(response.message);
        onResult(response.confirm);
      } else if (mode === Mode.LEAVE) {
        await DELETE("/myinfo", {
          password: passwordRef.current.value,
        });
        alert(MESSAGE.DELETE.USER);
        dispatch(asyncLogout());
        navigate("/");
      }
    } catch (error) {
      console.log("🚀 ~ onConfirm ~ error:", error);
      alert(error.response.data.error);
    }
  };
  return (
    <FormWrap onSubmit={onConfirm}>
      <Flex gap={"20"}>
        <Input
          type={"password"}
          id={"password"}
          label={"비밀번호"}
          placeholder={"Password"}
          ref={passwordRef}
        />
        <Button type={"submit"} value={"본인 확인"} />
      </Flex>
    </FormWrap>
  );
}
