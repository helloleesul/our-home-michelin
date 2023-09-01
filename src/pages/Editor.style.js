import styled from "@emotion/styled";
import { MAIN_THEME_COLOR } from "../libs/const/color";

// export const YearEditors = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   padding: 40px 0;
//   h4 {
//     text-align: center;
//     font-size: 32px;
//     font-weight: 800;
//   }
//   h4 span {
//     color: #f7411f;
//   }
//   a {
//     cursor: pointer;
//   }
//   a img {
//     width: 20px;
//     margin: 0 15px;
//   }
// `;

export const NextEditorContaner = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  a {
    cursor: pointer;
  }
`;

export const NextPrev = styled.img`
  width: 20px;
`;

export const BackgroundBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 40px 0;
  padding: 40px 0 60px 0;
  background-color: #fff5f2;
  border-radius: 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const CenterBox = styled.div``;

export const EditorRecipes = styled.div`
  width: 100%;
  margin: 30px 0 10px;
  font-size: 16px;
  text-align: center;

  span {
    color: ${MAIN_THEME_COLOR[0]};
    font-size: 32px;
    font-weight: 800;
    margin: 0 5px;
    letter-spacing: 2px;
  }
`;

export const Section = styled.div`
  width: 1000px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 20px 0;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  height: 130px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  overflow: hidden;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: rotate(180deg);
  }
`;

export const EditorImage = styled.img`
  width: 100%;
  object-fit: cover;
  pointer-events: none;
  text-align: center;
`;

export const EditorLink = styled.div`
  text-decoration: none;
  color: ${MAIN_THEME_COLOR[1]};
  transition: 0.5s;
  &:hover {
    opacity: 0.8;
  }
`;
