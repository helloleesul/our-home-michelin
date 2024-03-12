import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrap = styled.div`
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WriterBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid ${theme.PALETTE.gray[300]};
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
