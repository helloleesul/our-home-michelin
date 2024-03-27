import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  position: sticky;
  top: 50px;
`;

export const ImgGroup = styled.div`
  img {
    border-radius: 10px;
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      color: ${theme.PALETTE.gray[300]};
    }
  }

  > span {
    font-size: ${theme.FONT_SIZE.big};
    font-weight: 600;
    color: ${theme.PALETTE.mainColor};
  }
`;

export const Ingredients = styled.ul`
  border: 1px dashed ${theme.PALETTE.primary[100]};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;

    .amount {
      color: ${theme.PALETTE.primary[100]};
      font-size: ${theme.FONT_SIZE.sm};
    }
  }
`;
