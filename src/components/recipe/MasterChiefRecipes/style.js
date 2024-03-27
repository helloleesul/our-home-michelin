import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrap = styled.div`
  background-color: ${theme.PALETTE.gray[100]};
  border-radius: 10px;
  padding: 20px;
`;

export const UserGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 30px;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      border: 1px solid ${theme.PALETTE.gray[200]};
      border-radius: 100%;
      overflow: hidden;
      margin-bottom: 10px;
    }
    span {
      font-weight: 500;
      color: ${theme.PALETTE.gray[300]};
    }
  }
`;
