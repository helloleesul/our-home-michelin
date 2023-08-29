import React, { useEffect, useState } from "react";
import * as S from "./Editor.style";
import EditorBox from "../components/pages/editor/EditorBox";
import Contents from "../components/pages/home/Contents";
import nextEditor from "../../src/assets/img/editorNext.png";
import prevEditor from "../../src/assets/img/editorPrev.png";
import requestApi from "../libs/const/api";
import { css } from "@emotion/react";

function Editor() {
  const limitValue = 6;
  const [pageValue, setPageValue] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [selectList, setSelectList] = useState([]); //필터링된 레시피목록

  const handlePrevClick = () => {
    if (hasMoreData && pageValue > 1) {
      setPageValue(pageValue - 1);
    }
  };

  const handleNextClick = () => {
    if (hasMoreData) {
      setPageValue(pageValue + 1);
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

  useEffect(() => {
    const getEditorList = async () => {
      try {
        const res = await requestApi(
          "get",
          `/editors?page=${pageValue}&limit=${limitValue}`
        );
        if (res.editors.length === 0) {
          setHasMoreData(false); // 데이터가 없으면 상태 변경
        } else {
          setEditorList(res.editors);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getEditorList();
  }, [pageValue]); // 빈 배열을 두 번째 매개변수로 전달하여 초기 렌더링 시에만 실행됩니다.

  //에디터가 작성한 레시피 가져오기
  const getEditorsRecipes = async (editorId) => {
    try {
      const res = await requestApi("get", "/editorRecipes/" + editorId);
      setSelectList(res); // 데이터 설정
      console.log("getTargetRecepies  :", res);
    } catch (error) {
      console.log(error);
      // 에러 처리 로직 추가
    }
  };

  useEffect(() => {
    const selectEditor = sessionStorage.getItem("selectEditor"); //세션에 저장된 선택한 에디터 가져오기
    //세션에 저장된 5스타 레시피 가져오기
    const editorRecipesList = getEditorsRecipes(selectEditor);
    console.log(editorRecipesList);
    // const tmp_list = editorRecipesList.filter((v) => {
    //   return v.userId === selectEditor;
    // }); //레시피 유저 아이디 = 선택한 에디터 필터링
    setSelectList(editorRecipesList); //state 세팅
  }, []);

  return (
    <S.CenterBox>
      <S.YearEditors>
        <h4>
          <span>냉슐랭</span> 에디터
        </h4>
      </S.YearEditors>
      <S.NextEditorContaner>
        <a onClick={handlePrevClick}>
          <S.NextPrev src={prevEditor} alt="prevEditor" />
        </a>
        <EditorBox editorList={editorList} />
        <a onClick={handleNextClick}>
          <S.NextPrev src={nextEditor} alt="nextEditor" />
        </a>
      </S.NextEditorContaner>
      <S.BackgroundBox>
        <div>
          <span>{editorList.nickName}</span>의 레시피
        </div>
        <Contents foodList={selectList.recipes} />
      </S.BackgroundBox>
    </S.CenterBox>
  );
}

export default Editor;
