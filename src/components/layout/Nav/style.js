import styled from "@emotion/styled";
import theme from "../../../styles/theme";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  border: 1px solid ${theme.PALETTE.mainColor};
  border-right: none;
  border-left: none;
  position: sticky;
  top: 0;
`;

export const ListGroup = styled.ul`
  display: flex;
  align-items: center;
`;
export const List = styled.li`
  flex: 1;
  text-align: center;
  padding: ${theme.FONT_SIZE.md};
`;

export const Button = styled(NavLink)`
  text-decoration: none;
  color: ${theme.PALETTE.mainColor};
  font-size: ${theme.FONT_SIZE.em};
  padding: 5px 15px;

  span {
    font-weight: 900;
  }
  &.active {
    background-color: ${theme.PALETTE.mainColor};
    color: ${theme.PALETTE.white};
  }
`;
