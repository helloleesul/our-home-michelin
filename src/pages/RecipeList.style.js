import styled from "@emotion/styled";

export const Back = styled.div`
  width: auto;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* flex-flow: row wrap; */
`;
export const Title = styled.h3`
  font-size: 24px;
  font-weight: 900;
  color: #464646;
  // margin: 50px 0px 10px 30px;
  /* background-color: azure; */
`;

export const Lists = styled.div`
  display: flex;
  justify-content: space-between;
  // flex-direction: row;
  // align-items: center;
  flex-wrap: wrap;

  &::after {
    content: "";
    flex: auto;
  }
`;

export const Item = styled.div`
  flex: 0 0 calc(20% - 16px);
  margin-bottom: 24px;
  border-bottom: 1px solid #ddd;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ItemTitle = styled.p`
  text-align: center;
  margin-top: 8px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 16px;
  margin-bottom: 16px;
`;

export const ToggleButton = styled.button`
  background-color: #fff;
  color: #f7411f;
  border: 1px solid #f7411f;
  font-weight: 1000;
  padding: 10px 23px;
  border-radius: 12px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  font-size: 18px;
  box-shadow: 0 2px 8px -2px;

  &:hover {
    opacity: 0.9;
    background-color: #fddcd5;
  }
`;

export const PaginationButton = styled.button`
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;
