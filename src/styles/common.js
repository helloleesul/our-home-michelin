/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import theme from "./theme";
import { css } from "@emotion/react";
import { Link, NavLink as N } from "react-router-dom";

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

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  width: 100%;
  ${(props) =>
    props.center &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.wrap &&
    css`
      flex-wrap: wrap;
    `}
  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `}
`;

export const WidthBox = styled.div`
  width: ${(props) => (props.width ? props.width : 100)}%;
`;

export const LinkStyle = css`
  color: ${theme.PALETTE.gray[300]};
  text-decoration: none;

  &:hover {
    color: ${theme.PALETTE.mainColor};
    text-decoration: underline;
  }
`;

export const ButtonLink = styled(Link)`
  ${LinkStyle}
`;

export const NavLink = styled(N)`
  ${LinkStyle}
  font-size: ${theme.FONT_SIZE.em};

  &.active {
    color: ${theme.PALETTE.mainColor};
    text-decoration: underline;
  }
`;

export const ColGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `}
`;

export const RelativeGroup = css`
  flex: 1;
  position: relative;
`;
export const AbsoluteText = css`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: ${theme.PALETTE.mainColor};
`;
export const ErrorText = css`
  font-size: ${theme.FONT_SIZE.xs};
  text-align: right;
  color: ${theme.PALETTE.mainColor};
  margin-top: -10px;
`;
