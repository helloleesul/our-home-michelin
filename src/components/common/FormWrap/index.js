import { Flex, Form, WidthBox } from "../../../styles/common";

export default function FormWrap({ children, width, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Flex center>
        <WidthBox width={width}>{children}</WidthBox>
      </Flex>
    </Form>
  );
}
