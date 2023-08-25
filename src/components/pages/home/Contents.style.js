import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Section = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  margin: 15px 0;
  cursor: pointer;

  p {
    width: 100%;
    height: 20%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const FoodImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const RecipeLink = styled(Link)`
  text-decoration: none;
  color: #464646;
  width: 176px;
  height: 172px;
`;
