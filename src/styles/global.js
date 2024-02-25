import { css } from "@emotion/react";
import reset from "styled-reset";
import theme from "./theme";

const globalFont = `"Pretendard Variable", Pretendard, -apple-system,
  BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
  "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`;

export const resetStyles = css`
  ${reset}
  * {
    box-sizing: border-box;
    color: ${theme.PALETTE.black};
  }

  body,
  input,
  textarea,
  button {
    font-family: ${globalFont};
  }
`;
