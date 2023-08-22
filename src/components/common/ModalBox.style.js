import styled from "@emotion/styled";
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
  margin-left: 450px;
  padding-top: 20px;
`;

export const Text = styled.h2`
  font-size: ${({ fontSize }) => fontSize || "15px"};
  color: ${({ color }) => color || "black"};
`;
