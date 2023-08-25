import React from "react";
import * as S from "./EditorBox.style";

function EditorBox({ editorList, startIndex, itemsPerPage }) {
  const visibleEditors = editorList.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <S.Section>
      {visibleEditors.map((editor, index) => (
        <S.EditorLink key={editor._id + index}>
          <S.EditorImage src={editor.profileImage} alt={editor.name} />
          <p>{editor.name}</p>
        </S.EditorLink>
      ))}
    </S.Section>
  );
}

export default EditorBox;
