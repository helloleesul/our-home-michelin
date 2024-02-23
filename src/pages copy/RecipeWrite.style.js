import styled from "@emotion/styled";
import { MAIN_THEME_COLOR } from "../libs/const/color";

export const Wrap = styled.article`
  width: 600px;
  margin: 25px auto;
  font-size: 10px;
`;

export const Title = styled.h2`
  color: ${MAIN_THEME_COLOR[0]};
  font-size: 1.6rem;
  font-weight: 600;
`;

export const RecipeFormContainer = styled.section`
  display: flex;
  border: 1px solid blue;
`;

export const RecipeForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
  font-size: 1.1rem;
`;

export const RecipeFormTop = styled.div`
  display: flex;
`;

export const RecipeFormTopLeft = styled.div`
  width: 72%;
  margin-right: 1rem;
`;

export const RecipeFormTopRight = styled.div`
  position: relative;
  width: 28%;
`;

export const RecipeFormAttribute = styled.div``;

export const RecipeFormAttributeLabel = styled.label`
  display: "inline";
  margin: 0.6rem 0;
  div {
    width: 6rem;
    margin-right: 2rem;
  }
  span {
    margin-bottom: 1rem;
  }
  input,
  select {
    padding: 0.6rem 0.4rem;
    margin-right: 0.5rem;
    border: none;
    border-radius: 0.3rem;
    outline: none;
    background-color: rgba(230, 230, 230, 0.5);
  }
  select {
    width: 10rem;
  }
`;

export const RecipeFormBottom = styled.div`
  width: 100%;
  padding: 0.3rem;
  margin-top: 0.8rem;
  text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 105%;
    margin-top: 0.4rem;
    font-size: 0.9rem;
  }
`;

export const RecipeAddBox = styled.div`
  display: ${(props) => (props ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  margin: 0.7rem 0 0.5rem 0;
  width: 100%;
  border-radius: 0.4rem;
  background-color: rgba(230, 230, 230, 0.5);

  div {
    margin: 0 0.5rem 0.5rem 0;
    font-size: 0.8rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    width: 100%;
  }

  li {
    display: flex;
    align-item: center;
    margin-bottom: 0.4rem;
    width: 100%;
    font-size: 0.9rem;
    list-style: none;
  }

  textarea {
    width: 83%;
    margin: 0 0.3rem 0 1rem;
    resize: vertical;
    border: none;
  }
`;

export const RecipeSteps = styled.ul``;

export const Button = styled.button`
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 0.8rem;
  color: #fff;
  background-color: ${MAIN_THEME_COLOR[1]};
`;

export const SubmitButton = styled(Button)`
  padding: 0.4rem 2.5rem;
  color: #fff;
  background-color: ${MAIN_THEME_COLOR[0]};
`;

export const DeleteButton = styled(Button)`
  margin: 0;
  padding: 5px 10px;
  color: #fff;
  background-color: #878787;
`;

export const RecipeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &.prevImg {
    position: absolute;
    left: 0;
    z-index: -1;
  }
`;
