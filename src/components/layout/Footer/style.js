import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const Footer = styled.footer`
  background-color: ${theme.PALETTE.gray[100]};
  text-align: center;
  padding: ${theme.FONT_SIZE.big};

  p {
    font-size: ${theme.FONT_SIZE.sm};
    color: ${theme.PALETTE.gray[300]};
    b {
      font-weight: 900;
      color: inherit;
    }
  }
`;
