import styled from "@emotion/styled";

export const Wrap = styled.article`
  width: 600px;
  margin: 50px auto;
`;

export const Box = styled.section`
  border-radius: 10px;
  margin-bottom: 50px;
  background: #464646;
  overflow: hidden;
  h3 {
    color: #fff;
    font-size: 30px;
    text-align: center;
    padding: 1rem 0;
  }
  &.shadow {
    background: #fff;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
    padding: 22px 26px;
  }
  img {
    width: 100%;
  }
`;

export const Author = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Buttons = styled.section``;
