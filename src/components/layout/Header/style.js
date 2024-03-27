import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import theme from "@/styles/theme";

export const Header = styled.header`
  border-bottom: 1px dashed ${theme.PALETTE.mainColor};
`;

export const Wrap = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: flex-end;
  margin-bottom: 15px;
`;
