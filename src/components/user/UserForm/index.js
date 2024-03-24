import { Flex } from "@/styles/common";

export default function UserForm({ form, children }) {
  return (
    <Flex gap={"30"} center>
      {form}
      <Flex gap={"10"} center>
        {children}
      </Flex>
    </Flex>
  );
}
