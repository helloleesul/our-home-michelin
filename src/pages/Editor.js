import React, { useState } from "react";
import { Container } from "../components/common/Layout";
import * as S from "./Editor.styled";
import EditorBox from "../components/pages/editor/EditorBox";
import EditorRecipe from "../components/pages/editor/EditorRecipe";
import nextYear from "../../src/assets/img/Next.png"
import prevYear from "../../src/assets/img/Prev.png"
import nextEditor from "../../src/assets/img/editorNext.png";
import prevEditor from "../../src/assets/img/editorPrev.png";

const editorData = [
  {
    id: 1,
    name: "커비",
    profileImage:
      "https://i.namu.wiki/i/ijg40CIiHx5-Ihr3ksIJUm4cQQDEnek8xMEmJaQqGR5U13DKOZnCkzwPx1L5rcEX2-xxFYAyQO7XTcyqQ2BGEw.webp",
  },
  {
    id: 2,
    name: "꼬부기",
    profileImage:
      "https://images.velog.io/images/hyunicecream/post/252155a9-e156-4acd-bc6a-2cce0feb9c88/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg",
  },
  {
    id: 3,
    name: "젤리",
    profileImage:
      "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2fG8/image/0zK7e-97apnyANk-UBEszLQuLF0.jpg",
  },
  {
    id: 4,
    name: "고양이",
    profileImage:
      "https://blog.kakaocdn.net/dn/dKCK2U/btqUekxdPc8/obYkOupRiOMIBY7CUDShk0/img.jpg",
  },
  {
    id: 5,
    name: "강아지",
    profileImage:
      "https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-small-brown-puppy-is-seen-looking-at-the-camera-image_2580991.png",
  },
  {
    id: 6,
    name: "꼬북이",
    profileImage:
      "https://images.velog.io/images/hyunicecream/post/252155a9-e156-4acd-bc6a-2cce0feb9c88/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg",
  },
  {
    id: 7,
    name: "고양이",
    profileImage:
      "https://blog.kakaocdn.net/dn/dKCK2U/btqUekxdPc8/obYkOupRiOMIBY7CUDShk0/img.jpg",
  },
  {
    id: 8,
    name: "강아지",
    profileImage:
      "https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-small-brown-puppy-is-seen-looking-at-the-camera-image_2580991.png",
  },
  {
    id: 9,
    name: "꼬북이",
    profileImage:
      "https://images.velog.io/images/hyunicecream/post/252155a9-e156-4acd-bc6a-2cce0feb9c88/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg",
  },
  {
    id: 10,
    name: "커비",
    profileImage:
      "https://i.namu.wiki/i/ijg40CIiHx5-Ihr3ksIJUm4cQQDEnek8xMEmJaQqGR5U13DKOZnCkzwPx1L5rcEX2-xxFYAyQO7XTcyqQ2BGEw.webp",
  },
];

function Editor() {
  const itemsPerPage = 6; // 한 페이지에 보여줄 에디터 개수
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex + itemsPerPage < editorData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <Container>
      <S.YearEditors>
        <p><img src={prevYear} alt="prevYear" /></p>
        <h4><span>2023년</span> 올해의 에디터</h4>
        <p><img src={nextYear} alt="nextYear" /></p>
      </S.YearEditors>
      <S.NextEditorContaner>
        <a onClick={handlePrevClick}><img src={prevEditor} alt="prevEditor" /></a>
        <EditorBox editorList={editorData} startIndex={startIndex} itemsPerPage={itemsPerPage} />
        <a onClick={handleNextClick}><img src={nextEditor} alt="nextEditor" /></a>
      </S.NextEditorContaner>
      <EditorRecipe/>
    </Container>
  );
}

export default Editor;
