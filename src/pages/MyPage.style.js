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
  margin-top: 50px;
  padding-left: 80px;
  border: 1px solid ${MAIN_THEME_COLOR[0]};
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 35px;
`;

export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
`;

export const InfoContainer = styled.div`
  margin-left: 40px;
  height: 100px;
  border: 1px solid;
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

// 레시피 목록
export const RecipeBoxContainer = styled.div`
  display: flex;
  flex-grow: 1; // width 값을 고정할지 그냥 목록 크기에 맞게할지
  border-radius: 10px;
`;
export const RecipeContainer = styled.div`
  width: 100%;
  border: 1px solid ${MAIN_THEME_COLOR[0]};
  border-left: none;
  border-radius: 10px;
`;

export const RecipeList = styled.div`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  border: 1px solid ${MAIN_THEME_COLOR[0]};
  padding-left: 34px;
  border-radius: 10px;
  border-left: none;
  border-right: none;
`;
export const RecipeItemBox = styled.div`
  width: calc(18%);
  display: flex;
  flex-direction: column;
`;

export const RecipeCard = styled.div`
  height: 150px;
  width: 100%;
  margin-bottom: 5px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #f0f0f0;
  border: 1px solid ${MAIN_THEME_COLOR[0]};
  cursor: pointer;
`;
export const RecipeText = styled.p`
  text-align: center;
  font-size: 14px;
  overflow: auto;
`;

export const TabsContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  border: 1px solid ${MAIN_THEME_COLOR[0]};
  border-radius: 10px;
  width: 200px;
`;

export const TabButton = styled.button`
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  margin: 0 10px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  color: ${({ isActive }) => (isActive ? MAIN_THEME_COLOR[0] : "black")};
  &:hover {
    color: ${MAIN_THEME_COLOR[0]};
  }
`;

export const countContainer = styled.div`
  border: 1px solid ${MAIN_THEME_COLOR[0]};
  margin-bottom: 25px;
  border-radius: 10px;
  display: flex;
  border-top: none;
`;
export const allCount = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${MAIN_THEME_COLOR[0]};

  border-radius: 10px;
`;

export const menuCount = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  border: 1px solid ${MAIN_THEME_COLOR[0]};
  border-radius: 10px;
  border-top: none;
  border-bottom: none;
  border-right: none;
`;

export const conterTitleText = styled.p`
  font-size: 18px;
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
`;

export const PaginationButton = styled.button`
  background-color: ${MAIN_THEME_COLOR[0]};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: -20px;
  cursor: pointer;
  &:hover {
    background-color: ${MAIN_THEME_COLOR[1]};
  }
`;
