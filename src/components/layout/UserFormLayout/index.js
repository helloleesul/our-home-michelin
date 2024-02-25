import { FlexColumn, WidthBox } from "../../../styles/common";

export default function UserFormLayout({ form, children }) {
  return (
    <FlexColumn gap={"30"} center>
      <WidthBox width={"50"}>{form}</WidthBox>
      <FlexColumn gap={"10"} center>
        {children}
      </FlexColumn>
    </FlexColumn>
  );
}
