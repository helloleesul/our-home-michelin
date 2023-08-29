import styled from "@emotion/styled";

export const YearEditors = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 0;
  h4 {
    text-align: center;
    font-size: 32px;
    font-weight: 800;
  }
  h4 span {
    color: #f7411f;
  }
  a {
    cursor: pointer;
  }
  a img {
    width: 20px;
    margin: 0 15px;
  }
`;
export const NextEditorContaner = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  padding: 30px 0;
  background-color: #ffe9e4;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CenterBox = styled.div``;

export const Section = styled.div`
  width: 1000px;
  display: flex;
  flex-flow: row wrap;
  gap: 25px;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  cursor: pointer;
`;

export const EditorImage = styled.img`
  width: 124px;
  height: 124px;
  background-color: red;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
  pointer-events: none;
`;

export const EditorLink = styled.div`
  text-decoration: none;
  color: #464646;
  transition: 0.5s;
  &:hover {
    opacity: 0.8;
  }
`;
