import styled from "@emotion/styled";

export const MainRefrigerator = styled.img`
  width: 100px; /* 이미지 너비 설정 */
  height: auto; /* 높이는 자동으로 조절됩니다 */
`;

export const RefrigeratorContainer = styled.div`
  width: 30%;
  height: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p span {
    font-weight: 800;
    font-size: 1.2rem;
    color: #f7411f;
  }
`;

export const Editor = styled.img`
  width: 124px; /* 이미지 너비 설정 */
  height: 124px;
  border-radius: 50%;
  margin-bottom: 10px;
`;


export const Food = styled.img`
  width: 176px; /* 이미지 너비 설정 */
  height: 132px;
  margin-bottom: 10px;
`;