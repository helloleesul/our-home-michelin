import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 70dvw;
  overflow: hidden;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: ${theme.PALETTE.white};
  border: 1px solid ${theme.PALETTE.mainColor};
`;

export const Header = styled.header`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.PALETTE.white};
  border-bottom: 1px solid ${theme.PALETTE.mainColor};
`;

export const Content = styled.div`
  padding: 10px;
  overflow-y: scroll;
  height: 70dvh;
`;

export const CheckBox = styled.input`
  display: none;

  &:disabled + div {
    background-color: ${theme.PALETTE.gray[200]};
    border-color: ${theme.PALETTE.gray[200]};
    &:hover {
      p {
        color: ${theme.PALETTE.gray[300]};
      }
    }
  }

  &:checked + div {
    border-style: solid;
    background-color: ${theme.PALETTE.primary[100]};
    p {
      color: ${theme.PALETTE.white};
    }
    &:hover {
      p {
        color: ${theme.PALETTE.white};
      }
    }
  }
`;

export const Type = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 20px;
  div {
    text-align: center;
    border: 1px dashed ${theme.PALETTE.primary[100]};
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: 600;
    &:hover {
      p {
        color: ${theme.PALETTE.primary[100]};
      }
    }
    p {
      color: ${theme.PALETTE.gray[300]};
      flex-grow: 1;
    }
    span {
      padding: 10px;
      font-size: 26px;
      background-color: ${theme.PALETTE.white};
    }
  }
`;
