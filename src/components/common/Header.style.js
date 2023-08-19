import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Title = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  text-align: center;
  padding: 2.5rem 0;
  font-weight: 800;
  color: #464646;
  text-decoration: none;

  span {
    color: #F7411F;
  }
`;
