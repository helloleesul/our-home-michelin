import { Link } from "react-router-dom";
import styled from "@emotion/styled";


export const Text = styled.nav`
  font-weight: 800;
  font-size: 24px;
  span {
    color: #f7411f;
  }
`;

export const Section = styled.dl`
  width: 80%;
  margin: 40px auto;

  dt {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }

  dd {
    padding:  20px 0;
    display: flex;
    justify-content: space-between;
    text-align: center;
    box-sizing: border-box;
    flex-wrap: wrap;
  }
`;

export const SeeMoreLink = styled(Link)`
  text-decoration: none;
  color: #464646;
  font-size: 14px;
`;
