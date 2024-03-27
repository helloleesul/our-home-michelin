import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrap = styled.div`
  padding: 20px 0;
`;

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

export const Line = styled.div`
  border-top: 1px dashed ${theme.PALETTE.primary[100]};
  flex: 1;
`;

export const LikeButton = styled.button`
  height: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    color: ${theme.PALETTE.gray[300]};
    font-variant-numeric: tabular-nums;
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 30px;
`;

export const Writer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  span.date {
    color: ${theme.PALETTE.gray[300]};
  }
`;

export const EditButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ProcessGroup = styled.div`
  > span {
    font-size: ${theme.FONT_SIZE.big};
    font-weight: 600;
    color: ${theme.PALETTE.mainColor};
  }

  ul {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    li {
      display: flex;
      gap: 10px;

      div {
        display: flex;
        width: 30px;
        height: 30px;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background-color: ${theme.PALETTE.primary[200]};
        span {
          color: ${theme.PALETTE.white};
        }
      }
      p {
        flex: 1;
        line-height: 1.5;
        margin-top: 2px;
      }
    }
  }
`;
