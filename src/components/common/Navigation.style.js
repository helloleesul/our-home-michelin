// Navigation.style.js

import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #f7411f;
  z-index: 10;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.15);
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 1200px;
`;

export const CustomNavLink = styled(NavLink)`
  color: white;
  text-align: center;
  text-decoration: none;
  padding: 12px 0;
  width: 25%;
  transition: 0.3s;
  &.active {
    background-color: #ff755b;
  }

  &:hover {
    background-color: #ff755b;
  }
`;
