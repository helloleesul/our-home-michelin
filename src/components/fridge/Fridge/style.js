import theme from "@/styles/theme";
import styled from "@emotion/styled";
// 내 냉장고
export const FridgeGroup = styled.div`
  padding: 30px;
`;

export const Fridge = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  gap: 10px;
`;

export const FridgeItem = styled.div`
  border: 1px solid ${theme.PALETTE.mainColor};
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    box-shadow: 0px 4px 8px 0px ${theme.PALETTE.primary[100]};
    button.delete {
      display: block;
    }
  }
  button.delete {
    display: none;
    position: absolute;
    right: -1px;
    top: -1px;
    width: 20px;
    height: 20px;
    color: ${theme.PALETTE.mainColor};
    border: 1px solid ${theme.PALETTE.mainColor};
    background-color: ${theme.PALETTE.white};
  }
  .img {
    font-size: ${theme.FONT_SIZE.hg};
    display: block;
  }
  .name {
    font-weight: 500;
    padding: 5px 0;
    background-color: ${theme.PALETTE.primary[100]};
    color: ${theme.PALETTE.white};
  }
`;

export const Date = styled.div`
  font-size: ${theme.FONT_SIZE.sm};
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: ${theme.PALETTE.gray[300]};
    padding: 0 15px;
  }
  button {
    color: ${theme.PALETTE.primary[100]};
    border: 1px solid ${theme.PALETTE.primary[100]};
    padding: 0 15px;
  }
`;

// 재료
export const Category = styled.div`
  border-radius: 10px;
  padding: 0 30px;
  margin-top: 30px;

  h3 {
    font-weight: 500;
    font-size: ${theme.FONT_SIZE.em};
    margin-bottom: 10px;
    color: ${theme.PALETTE.gray[300]};
    display: flex;
    align-items: center;
    gap: 20px;

    &::after {
      content: "";
      height: 1px;
      flex: 1;
      background: ${theme.PALETTE.gray[200]};
    }
  }
`;

export const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

export const Item = styled.div`
  text-align: center;
  border: 1px dashed ${theme.PALETTE.primary[100]};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 500;
  color: ${theme.PALETTE.gray[300]};

  &:hover {
    box-shadow: 0px 4px 8px 0px ${theme.PALETTE.primary[100]};
    .name {
      color: ${theme.PALETTE.primary[100]};
    }
  }
`;

export const CheckBox = styled.input`
  display: none;

  &:disabled + .info {
    background-color: ${theme.PALETTE.gray[200]};
    border-color: ${theme.PALETTE.gray[200]};
    .img {
      border-color: ${theme.PALETTE.gray[200]};
      border-style: solid;
      filter: grayscale(1);
    }
    &:hover {
      cursor: default;
      box-shadow: none;
      .name {
        color: ${theme.PALETTE.gray[300]};
      }
    }
  }

  &:checked + .info {
    border-style: solid;
    background-color: ${theme.PALETTE.primary[100]};
    .img {
      border-style: solid;
    }
    .name {
      color: ${theme.PALETTE.white};
    }
    &:hover {
      .name {
        color: ${theme.PALETTE.white};
      }
    }
  }
`;

export const Img = styled.span`
  padding: 10px;
  font-size: 26px;
  background-color: ${theme.PALETTE.white};
  border-right: 1px dashed ${theme.PALETTE.primary[100]};
`;

export const Name = styled.p`
  color: ${theme.PALETTE.gray[300]};
  flex-grow: 1;
`;

export const ButtonGroup = styled.div`
  position: sticky;
  bottom: 0;
  border-top: 1px solid ${theme.PALETTE.mainColor};
  display: flex;
  background-color: ${theme.PALETTE.white};
  > button {
    flex: 1;
    padding: 10px;
    border-right: 1px solid ${theme.PALETTE.mainColor};
    font-weight: 500;
    color: ${theme.PALETTE.primary[100]};
    &:last-child {
      border: none;
      background-color: ${theme.PALETTE.mainColor};
      color: ${theme.PALETTE.white};
    }
  }
`;
