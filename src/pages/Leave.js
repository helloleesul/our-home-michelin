import Title from "@/components/@common/Title";
import ConfirmForm, { Mode } from "@/components/user/ConfirmForm";
import UserForm from "@/components/user/UserForm";
import { Center, Flex } from "@/styles/common";

export default function Leave() {
  return (
    <Center>
      <Flex gap={"30"}>
        <Title
          icon={"🚪🏃‍♀️"}
          title={"회원 탈퇴"}
          type={"primary"}
          position={"center"}
        />
        <UserForm form={<ConfirmForm mode={Mode.LEAVE} />}>
          <p>우리집 냉슐랭을 탈퇴하시려면 본인 확인이 필요합니다.</p>
        </UserForm>
      </Flex>
    </Center>
  );
}
