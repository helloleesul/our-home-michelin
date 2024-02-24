import styled from "@emotion/styled";

export const Container = styled.div`
  min-width: 768px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  height: 100%;
  min-height: 100dvh;
`;
