import styled from "@emotion/styled";

export const ImageWrap = styled.div`
  margin: 0 auto;
  position: relative;
  input {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    left: 0;
    top: 0;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
`;
