import Title from "@/components/common/Title";
import InfoForm from "@/components/form/InfoForm";
import UserForm from "@/components/user/UserForm";
import { Flex } from "@/styles/common";

export default function InfoWrap() {
  return (
    <Flex gap={"30"}>
      <Title icon={"🤫"} title={"내 정보"} />
      <UserForm form={<InfoForm />}>
        <p>회원탈퇴</p>
      </UserForm>
    </Flex>
  );
}
