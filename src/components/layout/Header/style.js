import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import theme from "@/styles/theme";
import { Container as C } from "@/styles/common";

export const Header = styled.header`
  border-bottom: 1px dashed ${theme.PALETTE.mainColor};
`;

export const Container = styled(C)`
  padding: ${theme.FONT_SIZE.hg} 0;
  position: relative;
`;

export const Title = styled(Link)`
  font-weight: 800;
  font-size: ${theme.FONT_SIZE.hg};
  background-color: ${theme.PALETTE.white};
  text-decoration: none;

  span {
    color: ${theme.PALETTE.mainColor};
  }
`;

export const UserLink = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
