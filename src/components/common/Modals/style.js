import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Header = styled.header`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.PALETTE.white};
  border-bottom: 1px solid ${theme.PALETTE.mainColor};
`;

export const Content = styled.div`
  padding: 10px;
  max-height: 75dvh;
  overflow-y: scroll;
`;
