import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const RadioInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

export const RadioInputLabel = styled.label`
  flex: 1;
  text-align: center;
  cursor: pointer;
  padding: 10px;
  border: 1px solid ${theme.PALETTE.gray[200]};
  border-right: none;

  &:last-child {
    border-right: 1px solid ${theme.PALETTE.gray[200]};
  }

  &.active {
    border-color: ${theme.PALETTE.mainColor};
    background-color: ${theme.PALETTE.mainColor};
    color: ${theme.PALETTE.white};
    & + label {
      border-left-color: ${theme.PALETTE.mainColor};
    }
  }
`;
