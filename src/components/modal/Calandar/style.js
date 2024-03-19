import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${theme.PALETTE.mainColor};

  span,
  button {
    color: ${theme.PALETTE.white};
  }
`;

export const Month = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  padding: 10px;
  background-color: ${theme.PALETTE.white};
`;

export const Weekend = styled.div`
  text-align: center;
  padding: 8px;
`;

export const Empty = styled.div`
  text-align: center;
  padding: 8px;
  background-color: #eee;
`;

export const Day = styled.button`
  text-align: center;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;

  &:disabled {
    color: #ccc;
    background-color: #f0f0f0;
    cursor: default;
  }
  &.selected {
    border-color: ${theme.PALETTE.mainColor};
    background-color: ${theme.PALETTE.mainColor};
    color: #fff;
  }
  &:hover:not(.selected) {
    background-color: #f0f0f0;
  }
`;
