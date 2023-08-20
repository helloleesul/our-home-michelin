import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Title = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  text-align: center;
  padding: 20px 0 52px;
  font-weight: 800;
  color: #464646;
  text-decoration: none;

  span {
    color: #F7411F;
  }
`;

export const JoinLogin = styled.div`
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
  padding: 20px 30px 0 0;
`;

export const Join = styled(Link)`
  display: inline-block;
  width: fit-content;
  text-align: right;
  text-decoration: none;
  color: #464646;
  font-size: 14px;
`;

export const Login = styled(Link)`
  display: inline-block;
  margin-left: 10px;
  width: fit-content;
  text-align: right;
  text-decoration: none;
  color: #464646;
  font-size: 14px;
`;

export const IconBox = styled.div`
`;