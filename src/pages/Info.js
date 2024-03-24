import Title from "@/components/common/Title";
import ConfirmForm, { Mode } from "@/components/user/ConfirmForm";
import InfoForm from "@/components/user/InfoForm";
import UserForm from "@/components/user/UserForm";
import { ButtonLink, Center, Flex } from "@/styles/common";
import { useState } from "react";

export default function Info() {
  const [confirm, setConfirm] = useState(false);

  return (
    <Center>
      <Flex gap={"30"}>
        <Title
          icon={"🤫"}
          title={confirm ? "내 정보" : "비밀번호 입력"}
          type={"primary"}
          position={"center"}
        />
        <UserForm
          form={
            confirm ? (
              <InfoForm />
            ) : (
              <ConfirmForm mode={Mode.MODIFY} onResult={setConfirm} />
            )
          }
        >
          {confirm ? (
            <ButtonLink to="/kitchen/info/leave">회원 탈퇴</ButtonLink>
          ) : (
            <p>계정 정보 서비스를 이용하시려면 본인 확인이 필요합니다.</p>
          )}
        </UserForm>
      </Flex>
    </Center>
  );
}
