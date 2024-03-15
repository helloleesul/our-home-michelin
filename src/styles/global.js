import { css } from "@emotion/react";
import reset from "styled-reset";
import theme from "./theme";

const globalFont = `"Pretendard Variable", Pretendard, -apple-system,
  BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
  "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`;

export const resetStyles = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

  ${reset}
  * {
    box-sizing: border-box;
    color: ${theme.PALETTE.black};
  }

  body {
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${theme.PALETTE.primary[100]};
      // background-clip: padding-box;
      // border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      border-left: 1px solid ${theme.PALETTE.primary[100]};
      background-color: ${theme.PALETTE.white};
    }
  }

  body,
  input,
  textarea,
  button {
    font-family: ${globalFont};
  }

  input,
  button {
    outline: none;
    font-size: inherit;
    border: none;
    background: none;
  }

  input {
    &::placeholder {
      color: ${theme.PALETTE.gray[200]};
    }
    &:focus {
      border-color: ${theme.PALETTE.mainColor};
    }
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  button {
    padding: 0;
    &:hover {
      cursor: pointer;
    }
  }
`;
