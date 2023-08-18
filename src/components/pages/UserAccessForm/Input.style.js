import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 4px;
`;

export const UserInput = styled.input`
  width: 350px;
  height: 30px;
  padding-left: 8px;
  border: 1px solid #ccc;
  border-radius: 15px;

  &:focus {
    outline: none;
    border-color: orange;
  }
`;
