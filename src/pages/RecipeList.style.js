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
  font-size: 15px;
  font-weight: 900;
  margin: 50px 0px 10px 30px;
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
