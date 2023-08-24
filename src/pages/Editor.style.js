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
  h4 span{
    color: #F7411F;
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
  a img{
    width:20px;
  }
`;

export const BackgroundBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 40px 0;
  padding: 30px 0;
  background-color: #FFE9E4;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
`;

export const CenterBox = styled.div`
  display: flex;
  flex-direction: column; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`;