import styled from "@emotion/styled";


export const Back = styled.div`
  width: auto;
  max-width:1000px;
  /* background-color: goldenrod; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* flex-flow: row wrap; */
`
export const Title = styled.h3`
  font-size: 15px;
  font-weight: 900;
  margin: 50px 0px 10px 30px;
  /* background-color: azure; */
`;

export const Lists = styled.div`
    display: grid;
    grid-template-rows: 5fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

`; 