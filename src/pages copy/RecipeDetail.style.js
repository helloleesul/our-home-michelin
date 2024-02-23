import styled from "@emotion/styled";
import { MAIN_THEME_COLOR } from "../libs/const/color";

export const Wrap = styled.article`
  width: 600px;
  margin: 50px auto;
`;

export const Box = styled.section`
  border-radius: 10px;
  margin-bottom: 30px;
  background: #fddcd5;
  overflow: hidden;
  h3 {
    background: ${MAIN_THEME_COLOR[1]};
    color: #fff;
    font-size: 30px;
    text-align: center;
    padding: 1rem 0;
    font-weight: 700;
    margin: 0 auto;
    .stars {
      font-size: 30px;
      margin-bottom: 12px;
      letter-spacing: 0.4rem;
    }
    span {
      width: 80%;
      display: block;
      margin: 0 auto;
    }
  }
  &.shadow {
    background: #fff;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
    padding: 22px 26px;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    // object-fit: scale-down;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 600;
  color: ${MAIN_THEME_COLOR[1]};
  margin-bottom: 25px;
  h4 {
    background-color: ${MAIN_THEME_COLOR[1]};
    color: #fff;
    width: 110px;
    text-align: center;
    border-radius: 6px;
    padding: 7px 0;
  }
`;

export const UnorderList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 18px;
  gap: 30px;
  margin: 10px 0;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(50% - 30px);
    font-weight: 500;
    color: ${MAIN_THEME_COLOR[1]};
    .weight {
      color: #c7c7c7;
    }
    .line {
      height: 1px;
      background: #c7c7c7;
      flex: 1;
      margin: 0 20px;
    }
  }
`;
export const OrderList = styled.ol`
  li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 25px;
    font-size: 17px;
    color: ${MAIN_THEME_COLOR[1]};
    font-weight: 500;
    .stepCount {
      background-color: ${MAIN_THEME_COLOR[0]};
      border-radius: 100px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      display: block;
      text-align: center;
      color: #fff;
      font-weight: 900;
    }
    p {
      flex: 1;
      line-height: 1.3;
      margin-top: 4px;
      white-space: pre-line;
      display: inline;
    }
  }
`;

export const Owner = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  .profile {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .editorMark {
      position: absolute;
      left: -3px;
      top: -3px;
      svg {
        width: 22px;
        height: 22px;
      }
    }
    .nickName {
      .editorUser {
        color: ${MAIN_THEME_COLOR[0]};
        padding-right: 5px;
      }
    }
    .imgBox {
      width: 50px;
      height: 50px;
      border-radius: 100px;
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .buttons {
    font-size: 25px;
    color: ${MAIN_THEME_COLOR[0]};
    font-weight: 900;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    span {
      margin-right: 10px;
    }
    button {
      border: none;
      background: none;
      cursor: pointer;
      padding: 0 5px;
    }
  }
`;

export const Buttons = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button,
  a {
    border: none;
    background: none;
    font-size: 20px;
    color: #fff;
    border-radius: 10px;
    padding: 8px 20px;
    cursor: pointer;
    text-decoration: none;
    &.editBtn {
      background: ${MAIN_THEME_COLOR[0]};
    }
    &.deleteBtn {
      background: ${MAIN_THEME_COLOR[1]};
    }
  }
`;
