import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { css } from "@emotion/react";

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  width: 100px;
`;

export const Input = styled.input`
  height: ${theme.FONT_SIZE.hg};
  padding: 0 5px;
  border: 1px solid ${theme.PALETTE.gray[200]};
  ${(props) =>
    props.width
      ? css`
          width: ${props.width}px;
        `
      : css`
          flex-grow: 1;
        `}
  &:disabled {
    background-color: ${theme.PALETTE.gray[200]};
    border-color: ${theme.PALETTE.gray[300]};
    color: ${theme.PALETTE.gray[300]};
  }
`;
