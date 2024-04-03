import styled from "@emotion/styled";
import theme from "@/styles/theme";

export const Button = styled.button`
  height: ${theme.FONT_SIZE.hg};
  border: 1px solid ${theme.PALETTE.mainColor};
  background-color: ${theme.PALETTE.white};
  color: ${theme.PALETTE.mainColor};
  font-weight: 500;
  width: ${(props) =>
    props.width === "auto"
      ? "auto"
      : !isNaN(props.width)
      ? `${props.width}px`
      : "100%"};

  &:hover {
    background-color: ${theme.PALETTE.mainColor};
    color: ${theme.PALETTE.white};
  }
  &:disabled {
    background-color: ${theme.PALETTE.gray[200]};
    border-color: ${theme.PALETTE.gray[300]};
    color: ${theme.PALETTE.gray[300]};
  }
`;
