import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #F7411F;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* 수직 가운데 정렬 */
  height: 100%;
  width: 1200px; 
`;

export const CustomNavLink = styled(NavLink)`
  color: white;
  text-align: center;
  text-decoration: none;
  padding: 1rem;
  width: 33.3%;

  &:hover {
    background-color: #FF755B;
`;