import styled from "@emotion/styled";
import theme from "./theme";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-width: 768px;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  height: 100%;
  min-height: 100dvh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.PALETTE.mainColor};
  padding: ${theme.FONT_SIZE.hg};
`;

export const ColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${(props) =>
    css`
      gap: ${props.gap}px;
    `}
`;

export const WidthBox = styled.div`
  width: ${(props) => (props.width ? props.width : 100)}%;
`;

export const ButtonLink = styled(Link)`
  color: ${theme.PALETTE.gray[300]};
  text-decoration: none;

  &:hover {
    color: ${theme.PALETTE.mainColor};
    text-decoration: underline;
  }
`;
