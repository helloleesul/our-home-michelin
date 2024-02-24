import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import theme from "../../../styles/theme";
import { Container as C } from "../../../styles/common";

export const Container = styled(C)`
  text-align: center;
  padding: ${theme.FONT_SIZE.hg};
  position: relative;
`;

export const Title = styled(Link)`
  font-weight: 900;
  font-size: ${theme.FONT_SIZE.hg};
  color: ${theme.PALETTE.black};
  background-color: ${theme.PALETTE.white};
  text-decoration: none;

  span {
    background-color: ${theme.PALETTE.mainColor};
    color: ${theme.PALETTE.white};
    padding: 0 ${theme.FONT_SIZE.es};
  }
`;

export const UserLink = styled.div`
  position: absolute;
  right: 0;
  bottom: ${theme.FONT_SIZE.em};
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled(Link)`
  color: ${theme.PALETTE.gray[300]};
  text-decoration: none;

  &:hover {
    color: ${theme.PALETTE.mainColor};
    text-decoration: underline;
  }
`;
