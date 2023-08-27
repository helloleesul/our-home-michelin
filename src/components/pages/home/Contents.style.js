import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Section = styled.div`
  width: 1000px;
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  padding-top: 10px;

  p {
    width: 100%;
    height: 20%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const FoodImage = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const RecipeLink = styled(Link)`
  text-decoration: none;
  color: #464646;
  width: calc(20% - 15px);
  height: 172px;
`;
