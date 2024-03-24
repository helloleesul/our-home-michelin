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

  &:hover img {
    transform: scale(1.1);
  }
`;

export const ImgWrap = styled.div`
  border-radius: 10px;
  overflow: hidden;

  img {
    transition: transform 0.3s ease-in-out;
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Like = styled.span`
  font-size: ${theme.FONT_SIZE.sm};
`;
