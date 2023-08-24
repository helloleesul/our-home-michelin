import React from "react";
import * as S from "./EditorBox.style";

function EditorBox({ editorList, startIndex, itemsPerPage }) {
  const visibleEditors = editorList.slice(startIndex, startIndex + itemsPerPage);

  return (
    <S.Section>
      {visibleEditors.map((editor, index) => (
        <div key={editor.id + index}>
          <S.EditorImage src={editor.profileImage} alt={editor.name} />
          <p>{editor.name}</p>
        </div>
      ))}
    </S.Section>
  );
}

export default EditorBox;
