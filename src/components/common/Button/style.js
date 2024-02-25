import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const Button = styled.button`
  height: ${theme.FONT_SIZE.hg};
  border: 1px solid ${theme.PALETTE.mainColor};
  background-color: ${theme.PALETTE.white};
  color: ${theme.PALETTE.mainColor};
  font-weight: 500;
  ${(props) =>
    css`
      width: ${props.width}px;
    `};

  &:hover {
    background-color: ${theme.PALETTE.mainColor};
    color: ${theme.PALETTE.white};
  }
`;
