import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

export const Line = styled.div`
  border-top: 1px dashed ${theme.PALETTE.primary[100]};
  flex: 1;
`;

export const Type = styled.span`
  border: 1px solid ${theme.PALETTE.primary[100]};
  color: ${theme.PALETTE.primary[100]};
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 100%;
`;

export const SubTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
