import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const Group = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  width: 100px;
`;

export const Input = styled.input`
  flex: 1;
  height: ${theme.FONT_SIZE.hg};
  padding: 0 5px;
  border: 1px solid ${theme.PALETTE.gray[200]};

  &:focus {
    border-color: ${theme.PALETTE.mainColor};
  }
`;
