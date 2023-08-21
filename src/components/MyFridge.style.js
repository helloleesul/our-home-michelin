import { css } from "@emotion/react";
import styled from "@emotion/styled";

const commonStyle = css({
  padding: "1.5rem 2rem",
});

export const Header = styled.header`
  ${commonStyle}
  color: #fff;
  background-color: #464646;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 22px;
    font-weight: 900;
  }
  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  ${commonStyle}
`;

export const IngredientList = styled.div``;
export const Fridge = styled.div``;

export const EmptyFridge = styled.div`
  color: #464646;
  text-align: center;
  img {
    margin: 0 auto;
    display: block;
    padding-right: 40px;
  }
  h4 {
    font-size: 24px;
    margin: 20px 0 30px;
    font-weight: 700;
  }
  p {
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 40px;
  }
  button {
    background: #f7411f;
    border: none;
    font-size: 16px;
    color: #fff;
    border-radius: 10px;
    padding: 8px 50px;
    cursor: pointer;
    margin-bottom: 10px;
  }
`;
