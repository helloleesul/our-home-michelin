import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const Group = styled.div`
  display: flex;
  font-size: ${theme.FONT_SIZE.hg};
  gap: ${theme.FONT_SIZE.es};
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h2`
  font-weight: 800;
  background-color: ${theme.PALETTE.mainColor};
  color: ${theme.PALETTE.white};
  padding: 2px ${theme.FONT_SIZE.es};
`;
