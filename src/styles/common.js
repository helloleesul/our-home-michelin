import styled from "@emotion/styled";

export const Container = styled.div`
  min-width: 768px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  main {
    flex: 1;
    min-height: calc(100vh - 306px);
  }
`;
