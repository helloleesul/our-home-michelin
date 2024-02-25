import { FlexColumn, Form, WidthBox } from "../../../styles/common";

export default function FormLayout({ children, width, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <FlexColumn center>
        <WidthBox width={width}>{children}</WidthBox>
      </FlexColumn>
    </Form>
  );
}
