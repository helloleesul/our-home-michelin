import React from "react";
import * as S from "./EditorBox.style";
import { useNavigate } from "react-router-dom";

function EditorBox({ editorList }) {
  const navigate = useNavigate();

  const handleEditorClick = (id) => {
    console.log("editor id :", id);
    sessionStorage.setItem("selectEditor", id);
    navigate("/editor");
  };
  return (
    <S.Section>
      {editorList.map((editor, index) => (
        <S.EditorLink
          key={editor._id + index}
          onClick={() => {
            handleEditorClick(editor._id);
          }}
        >
          <S.EditorImage
            style={{ pointerEvents: "none" }}
            src={editor.profileImageURL}
            alt={editor.nickName}
          />
          <p style={{ pointerEvents: "none" }}>{editor.nickName}</p>
        </S.EditorLink>
      ))}
    </S.Section>
  );
}

export default EditorBox;
