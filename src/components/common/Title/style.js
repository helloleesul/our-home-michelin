import styled from "@emotion/styled";
import { css } from "@emotion/react";
import theme from "@/styles/theme";

export const Group = styled.div`
  display: flex;
  font-size: ${theme.FONT_SIZE.hg};
  gap: ${theme.FONT_SIZE.es};
  ${({ position }) => position && POSITION[position]};
  align-items: center;
`;

export const Header = styled.h2`
  font-weight: 800;
  ${({ type }) => type && TYPE[type]};
`;

const TYPE = {
  primary: css`
    background-color: ${theme.PALETTE.mainColor};
    color: ${theme.PALETTE.white};
    padding: 2px ${theme.FONT_SIZE.es};
  `,
  basic: css`
    background-color: none;
    color: ${theme.PALETTE.mainColor};
  `,
};

const POSITION = {
  left: css`
    justify-content: flex-start;
  `,
  center: css`
    justify-content: center;
  `,
  right: css`
    justify-content: flex-end;
  `,
};
