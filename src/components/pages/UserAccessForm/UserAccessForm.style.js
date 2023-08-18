import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ChefImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const Text = styled.h2`
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? "20px" : "50px")};
  font-size: ${({ fontSize }) => fontSize || "25px"};
`;
export const InputContainer = styled.div`
  width: 550px;
  height: ${({ height }) => (height ? "550px" : "350px")};
  border: 1px solid #ffe9e4;
  background-color: #ffe9e4;
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 25px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.3);
`;
export const Btn = styled.button`
  width: 170px;
  height: 40px;
  margin-top: 20px;
  border-radius: 15px;
  border: 1px solid #f7411f;
  background-color: #f7411f;
  color: white;
  font-size: 16px;
  margin-bottom: 10px;
`;
