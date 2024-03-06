import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { confirmed } from "@/libs/store/authSlice";

import { Flex } from "@/styles/common";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import FormWrap from "@/components/form/FormWrap";

import { POST } from "@/libs/api";

export default function ConfirmForm() {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const onConfirm = async (e) => {
    e.preventDefault();

    if (!passwordRef.current.value) return;
    try {
      const response = await POST("/confirm-password", {
        password: passwordRef.current.value,
      });

      dispatch(confirmed(response.confirm));
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
