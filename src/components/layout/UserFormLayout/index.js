import { Flex, WidthBox } from "../../../styles/common";

export default function UserFormLayout({ form, children }) {
  return (
    <Flex gap={"30"} center>
      <WidthBox width={"50"}>{form}</WidthBox>
      <Flex gap={"10"} center>
        {children}
      </Flex>
    </Flex>
  );
}
