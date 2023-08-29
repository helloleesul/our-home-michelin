import React, { useEffect, useState } from "react";
import * as S from "./Editor.style";
import EditorBox from "../components/pages/editor/EditorBox";
import Contents from "../components/pages/home/Contents";
import nextEditor from "../../src/assets/img/editorNext.png";
import prevEditor from "../../src/assets/img/editorPrev.png";
import requestApi from "../libs/const/api";

const editorData = [
  {
    _id: "test001",
    name: "커비",
    profileImage:
      "https://i.namu.wiki/i/ijg40CIiHx5-Ihr3ksIJUm4cQQDEnek8xMEmJaQqGR5U13DKOZnCkzwPx1L5rcEX2-xxFYAyQO7XTcyqQ2BGEw.webp",
  },
  {
    _id: "test002",
    name: "꼬부기",
    profileImage:
      "https://images.velog.io/images/hyunicecream/post/252155a9-e156-4acd-bc6a-2cce0feb9c88/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg",
  },
  {
    _id: "test003",
    name: "젤리",
    profileImage:
      "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2fG8/image/0zK7e-97apnyANk-UBEszLQuLF0.jpg",
  },
  {
    _id: "test004",
    name: "고양이",
    profileImage:
      "https://blog.kakaocdn.net/dn/dKCK2U/btqUekxdPc8/obYkOupRiOMIBY7CUDShk0/img.jpg",
  },
  {
    _id: "test005",
    name: "강아지",
    profileImage:
      "https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-small-brown-puppy-is-seen-looking-at-the-camera-image_2580991.png",
  },
  {
    _id: "test006",
    name: "꼬북이",
    profileImage:
      "https://images.velog.io/images/hyunicecream/post/252155a9-e156-4acd-bc6a-2cce0feb9c88/%E1%84%81%E1%85%A9%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5.jpeg",
  },
  {
    _id: "test007",
    name: "고양이",
    profileImage:
      "https://blog.kakaocdn.net/dn/dKCK2U/btqUekxdPc8/obYkOupRiOMIBY7CUDShk0/img.jpg",
  },
];

function Editor() {
  const itemsPerPage = 6; // 한 페이지에 보여줄 에디터 개수
  const [startIndex, setStartIndex] = useState(0);
  // const [currentYear, setCurrentYear] = useState(2023); // 초기 년도 설정
  const [selectList, setSelectList] = useState([]); //필터링된 레시피목록
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
  /*
유저 목록을 가져온다

유저 목록에서 

겟요청으로 레시피 목록을 가져온다

레시피 목록에서 해당 레시피만 필터링한다 > 상태관리로 저장해야되는데 할줄모른다 > 세션에 저장한다

필터링된 레시피를 화면에 맵핑한다 > 컨텐츠박스 > 세션에서 가져와서 그려준다

*/

  const [editorList, setEditorList] = useState([]);

  //에디터가 작성한 레시피 가져오기
  const getEditorsRecipes = async () => {
    const editorRecipes = await requestApi("get", "/editors-recipes");
    try {
      setSelectList(editorRecipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const selectEditor = sessionStorage.getItem("selectEditor"); //세션에 저장된 선택한 에디터 가져오기
    const recipes = JSON.parse(sessionStorage.getItem("fiveStarRecipes")); //세션에 저장된 5스타 레시피 가져오기
    const tmp_list = recipes.filter((v) => {
      return v.userId === selectEditor;
    }); //레시피 유저 아이디 = 선택한 에디터 필터링
    setSelectList(tmp_list); //state 세팅
  }, []);
  return (
    <S.CenterBox>
      <S.YearEditors>
        <span>냉슐랭</span> 에디터
      </S.YearEditors>
      <S.NextEditorContaner>
        <a onClick={handlePrevClick}>
          <S.NextPrev src={prevEditor} alt="prevEditor" />
        </a>
        <EditorBox
          editorList={editorData}
          startIndex={startIndex}
          itemsPerPage={itemsPerPage}
        />
        <a onClick={handleNextClick}>
          <S.NextPrev src={nextEditor} alt="nextEditor" />
        </a>
      </S.NextEditorContaner>
      <S.BackgroundBox>
        <div>
          <span>{editorData.name}</span>의 레시피
        </div>
        <Contents foodList={selectList} />
      </S.BackgroundBox>
    </S.CenterBox>
  );
}

export default Editor;
