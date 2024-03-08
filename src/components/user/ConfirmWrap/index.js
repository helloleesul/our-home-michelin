import Title from "@/components/common/Title";
import ConfirmForm, { Mode } from "@/components/user/ConfirmForm";
import UserForm from "@/components/user/UserForm";
import { Flex } from "@/styles/common";

export default function ConfirmWrap() {
  return (
    <Flex gap={"30"}>
      <Title icon={"🤫"} title={"비밀번호 입력"} />
      <UserForm form={<ConfirmForm mode={Mode.MODIFY} />}>
        <p>계정 정보 서비스를 이용하시려면 본인 확인이 필요합니다.</p>
      </UserForm>
    </Flex>
  );
}
