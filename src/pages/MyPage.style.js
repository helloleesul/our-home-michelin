import styled from "@emotion/styled";
import { MAIN_THEME_COLOR } from "../libs/const/color";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -35px;
`;

export const UserContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 15px;
  margin-top: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 35px;
`;

export const ProfileImg = styled.img`
  padding-left: 50px;
  width: 120px;
  height: 120px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(3deg);
  }
`;

export const InfoContainer = styled.div`
  margin-left: 40px;
  height: 100px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
`;

export const Text = styled.h2`
  font-size: ${({ fontSize }) => fontSize || "15px"};
  color: ${({ color }) => color || "black"};
`;

export const Button = styled.button`
  width: 89px;
  border-radius: 15px;
  background-color: #f0f0f0;
  border: none;
  &:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
  margin-top: 15px;
`;

export const GradeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  flex-grow: 1;
  padding-right: 50px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const RecipeBoxContainer = styled.div`
  display: flex;
  flex-grow: 1;
  border-radius: 10px;
`;

export const RecipeContainer = styled.div`
  width: 100%;
  border-radius: 10px;
`;

export const RecipeList = styled.div`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  border: 2px solid ${MAIN_THEME_COLOR[2]};
  padding-left: 34px;
  border-right: none;
  border-left: none;
`;

export const RecipeItemBox = styled.div`
  width: calc(18%);
  display: flex;
  flex-direction: column;
`;

export const RecipeImg = styled.img`
  height: 150px;
  width: 100%;
  margin-bottom: 5px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #f0f0f0;
  border: 2px solid ${MAIN_THEME_COLOR[2]};
  cursor: pointer;
`;

export const RecipeText = styled.p`
  text-align: center;
  font-size: 14px;
  overflow: auto;
`;

export const TabsContainer = styled.div`
  padding: 10px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const TabButton = styled.button`
  width: 150px;
  padding: 10px;
  border: none;
  background-color: white;
  margin: 0 10px;
  cursor: pointer;
  font-size: 14px;
  color: ${({ isActive }) => (isActive ? MAIN_THEME_COLOR[0] : "black")};
  &:hover {
    color: ${MAIN_THEME_COLOR[0]};
  }
`;

export const countContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  border: 2px solid ${MAIN_THEME_COLOR[2]};
  border-right: none;
  border-left: none;
  align-items: center;
`;

export const line = styled.div`
  border-right: 2px solid ${MAIN_THEME_COLOR[2]};
  height: 35px;
`;

export const allCount = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const menuCount = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const conterTitleText = styled.p`
  font-size: 20px;
  padding-bottom: 5px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? MAIN_THEME_COLOR[0] : "black")};
  &:hover {
    color: ${MAIN_THEME_COLOR[0]};
  }
`;

export const menuCountBox = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 12px;
  border-radius: 5px;
`;

export const PaginationButton = styled.button`
  background-color: ${({ isActive }) =>
    isActive ? MAIN_THEME_COLOR[0] : MAIN_THEME_COLOR[2]};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: -17px;
  cursor: pointer;
  &:hover {
    background-color: ${MAIN_THEME_COLOR[0]};
  }
`;
