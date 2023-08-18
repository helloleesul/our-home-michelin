import React from "react";
import * as S from "./Contents.style"; // Contents 스타일을 모두 가져옴

function Contents({ title, renderContent }) {
  return (
    <S.Section>
      <dt>
        <S.Text>
          {title.before}
          <span>{title.highlight}</span>
          {title.after}
        </S.Text>
        <S.SeeMoreLink to="/editor">더보기</S.SeeMoreLink>
      </dt>
      <dd>
        {renderContent}
      </dd>
    </S.Section>
  );
}

export default Contents;
