import Title from "@/components/common/Title";
import InfoForm from "@/components/user/InfoForm";
import UserForm from "@/components/user/UserForm";
import { ButtonLink, Flex } from "@/styles/common";

export default function InfoWrap() {
  return (
    <Flex gap={"30"}>
      <Title icon={"🤫"} title={"내 정보"} />
      <UserForm form={<InfoForm />}>
        <ButtonLink to="/kitchen/info/leave">회원 탈퇴</ButtonLink>
      </UserForm>
    </Flex>
  );
}
