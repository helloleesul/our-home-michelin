import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  justifycontent: space-between;
  height: 100%;
  gap: 5px;
  text-decoration: none;
  position: relative;

  &:hover img.recipe_img {
    transform: scale(1.1);
  }
`;

export const ImgWrap = styled.div`
  border-radius: 10px;
  overflow: hidden;

  img.recipe_img {
    transition: transform 0.3s ease-in-out;
    height: 160px;
    width: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5px;

  .recipe_title {
    font-weight: 500;
  }
`;

export const Like = styled.span`
  font-size: ${theme.FONT_SIZE.sm};
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const Count = styled.div`
  position: absolute;
  border: 1px solid ${theme.PALETTE.primary[200]};
  border-radius: 10px;
  left: -10px;
  top: -10px;
  width: 40px;
  height: 40px;
  z-index: 1;
  background: ${theme.PALETTE.white};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${theme.PALETTE.primary[200]};
  }
`;
