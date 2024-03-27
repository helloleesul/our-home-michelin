import styled from "@emotion/styled";
import theme from "@/styles/theme";

export const Footer = styled.footer`
  background-color: ${theme.PALETTE.gray[100]};
  padding: ${theme.FONT_SIZE.big};
  text-align: center;

  p {
    font-size: ${theme.FONT_SIZE.sm};
    color: ${theme.PALETTE.gray[300]};
    font-weight: 300;
    b {
      font-weight: 800;
      color: inherit;
    }
  }
`;
