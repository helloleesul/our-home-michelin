import styled from "@emotion/styled";
import React from "react";
import { Container } from "../components/common/Layout";
import EditorBox from "../components/pages/editor/EditorBox";
import EditorRecipe from "../components/pages/editor/EditorRecipe";

const YearEditors = styled.div`
  width: 100%;
  padding: 40px 0;
  h4 {
    text-align: center;
    font-size: 34px;
    font-weight: 800;
  }
  h4 span{
    color: #F7411F;
  }
`;


function Editor({ editor }) {

  return (
    <Container>
      <YearEditors>
        <h4><span>2023년</span> 올해의 에디터</h4>
      </YearEditors>
      {/* {editor.map(editorItem => (
        <EditorBox key={editorItem.id} name={editorItem.name} image={editorItem.image} />
      ))} */}
      <EditorBox/>
      <EditorRecipe/>
    </Container>
  );
}

export default Editor;