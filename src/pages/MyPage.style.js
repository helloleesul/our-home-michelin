import styled from "@emotion/styled";
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const UserContainer = styled.div`
  width: 650px;
  height: 100px;
  margin-top: 50px;
  padding-left: 80px;
  border: 1px solid #e0dfe1;
  border-radius: 15px;
  display: flex;
  align-items: center;
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

//모달 스타일
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 5px;
  padding-top: 30px;
`;
export const ModalBtn = styled.button`
  width: 360px;
  height: 40px;
  margin-top: 20px;
  border-radius: 15px;
  border: 1px solid #f7411f;
  background-color: #f7411f;
  color: white;
  font-size: 16px;
  margin-bottom: 25px;
  right: 590px;
`;

export const Input = styled.input`
  width: 350px;
  height: 35px;
  padding-left: 8px;
  margin-top: -10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  position: relative;
  &:focus {
    outline: none;
    border-color: orange;
  }
  &:hover {
    cursor: pointer;
    border-color: orange;
  }
`;
export const Label = styled.label`
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 4px;
  margin-right: 310px;
`;

export const CloseBtn = styled.button`
  background: transparent;
  border: none;
  margin-left: 610px;
  padding-top: 20px;
`;
