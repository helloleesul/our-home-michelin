import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Section = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  cursor: pointer;
`;

export const EditorImage = styled.img`
  width: 124px;
  height: 124px;
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
