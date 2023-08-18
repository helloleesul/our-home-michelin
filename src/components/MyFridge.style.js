import { css } from "@emotion/react";
import styled from "@emotion/styled";

const padding = css({
  padding: "1.5rem 2rem",
});

export const Header = styled.header`
  ${padding}
  color: #fff;
  background-color: #464646;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 22px;
    font-weight: 900;
  }
  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  ${padding}
`;
