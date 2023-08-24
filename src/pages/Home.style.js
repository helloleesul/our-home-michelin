import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  Width: 100%;
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

  p {
    margin: 0 20px 0;
  }

  p span {
    font-weight: 800;
    font-size: 1rem;
    color: #f7411f;
  }
`;

export const SeeMoreLink = styled(Link)`
  text-decoration: none;
  color: #464646;
  font-size: 14px;
`;

export const Text = styled.nav`
  width: 100%;
  font-weight: 800;
  font-size: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 36px 0 8px;
  
  span {
    color: #f7411f;
  }
`;