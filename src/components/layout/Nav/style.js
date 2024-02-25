import styled from "@emotion/styled";
import theme from "../../../styles/theme";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  border-bottom: 1px solid ${theme.PALETTE.mainColor};
  position: sticky;
  top: 0;
  background-color: ${theme.PALETTE.white};
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
  font-size: ${theme.FONT_SIZE.em};
  color: ${theme.PALETTE.mainColor};
  padding: 5px 15px;

  span {
    color: inherit;
    font-weight: 900;
  }
  &.active {
    background-color: ${theme.PALETTE.mainColor};
    color: ${theme.PALETTE.white};
  }
`;
