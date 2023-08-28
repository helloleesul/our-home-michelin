import React from "react";
import * as S from "./EditorBox.style";
import { useNavigate } from "react-router-dom";

function EditorBox({ editorList, startIndex, itemsPerPage }) {
  const navigate = useNavigate();
  const visibleEditors = editorList.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleEditorClick = (id) => {
    console.log("editor id :", id);
    sessionStorage.setItem("selectEditor", id);
    navigate("/editor");
  };
  return (
    <S.Section>
      {visibleEditors.map((editor, index) => (
        <S.EditorLink
          key={editor._id + index}
          onClick={() => {
            handleEditorClick(editor._id);
          }}
        >
          <S.EditorImage
            style={{ pointerEvents: "none" }}
            src={editor.profileImage}
            alt={editor.name}
          />
          <p style={{ pointerEvents: "none" }}>{editor.name}</p>
        </S.EditorLink>
      ))}
    </S.Section>
  );
}

export default EditorBox;
