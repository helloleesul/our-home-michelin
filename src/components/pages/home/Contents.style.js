import styled from "@emotion/styled";
import { Link } from "react-router-dom";


export const Section = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  margin: 20px 0;
  cursor: pointer;
`;

export const FoodImage = styled.img`
  width: 176px;
  height: 132px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const RecipeLink = styled(Link)`
  text-decoration: none;
  color: #464646;
`;