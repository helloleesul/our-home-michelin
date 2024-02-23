import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { MAIN_THEME_COLOR } from "../libs/const/color";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MainRefrigerator = styled.img`
  width: 100px; /* 이미지 너비 설정 */
  height: auto; /* 높이는 자동으로 조절됩니다 */
`;

export const RefrigeratorContainer = styled.div`
  padding: 30px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transform: scale(0.9);

  p {
    padding: 10px;
  }

  h3 {
    opacity: 0;
    bottom: -30px;
    position: absolute;
    right: 30%;
    font-weight: 700;
    color: ${MAIN_THEME_COLOR[0]};
    transition: 0.3s;
    font-size: 10px;
  }

  &:hover {
    .go-fill {
      opacity: 1;
      bottom: 0;
      font-size: 16px;
    }
  }

  p span {
    font-weight: 800;
    font-size: 20px;
    color: ${MAIN_THEME_COLOR[0]};
  }
`;

export const SeeMoreLink = styled(Link)`
  text-decoration: none;
  color: ${MAIN_THEME_COLOR[1]};
  font-size: 14px;
`;

export const Text = styled.nav`
  width: 1000px;
  font-weight: 800;
  font-size: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 36px 0 8px;

  span {
    color: ${MAIN_THEME_COLOR[0]};
  }
`;
