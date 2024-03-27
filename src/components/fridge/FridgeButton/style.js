import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Button = styled.button`
  position: fixed;
  bottom: 5%;
  left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${theme.PALETTE.mainColor};
  border-radius: 10px;
  background-color: white;
  width: 50px;
  height: 50px;
  padding: 20px;
  box-sizing: content-box;
`;

export const Fridge = styled.span`
  font-size: 40px;
`;
