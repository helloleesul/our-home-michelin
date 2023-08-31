import React, { useEffect, useState } from "react";
import Contents from "../components/pages/home/Contents";
import nextEditor from "../../src/assets/img/editorNext.png";
import prevEditor from "../../src/assets/img/editorPrev.png";
import requestApi from "../libs/const/api";
import * as S from "./Editor.style";
import CustomLoading from "../components/CustomLoading";
import editorDefaultImg from "../assets/img/chef1.png";

function Editor() {
  const limitValue = 6;
  const [selectList, setSelectList] = useState([]); //필터링된 레시피목록
  const [editorList, setEditorList] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectEditor, setSelectEditor] = useState("");
  const [loading, setLoading] = useState(false);

  //에디터 페이지네이션 가져오기
  const getEditorPagenation = async (pageNum, limit) => {
    setLoading(true);
    try {
      const res = await requestApi(
        "get",
        `/editors?page=${pageNum}&limit=${limit}`
      );

      if (res.editors.length !== 0) {
        setEditorList(res.editors);
        setTotalPage(res.totalPages);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //에디터가 작성한 레시피 가져오기
  const getEditorsRecipes = async (editorId) => {
    setLoading(true);

    try {
      const res = await requestApi("get", "/editorRecipes/" + editorId);
      setSelectList(res); // 데이터 설정
      console.log("getTargetRecepies  :", res);
      setLoading(false);
    } catch (error) {
      error.response.data.message && alert(error.response.data.message);
      setLoading(false);
      // 에러 처리 로직 추가
    }
  };

  //이전버튼 클릭 : 페이지 증가시키고 해당하는 에디터 목록 가져온다
  const handleNextClick = () => {
    if (1 < currentPage) {
      setCurrentPage(currentPage - 1);
      getEditorPagenation(currentPage, limitValue);
    }
  };

  //다음버튼 클릭 : 페이지 감소시키고 해당하는 에디터 목록 가져온다
  const handlePrevClick = () => {
    if (totalPage > currentPage && totalPage !== currentPage) {
      setCurrentPage(currentPage + 1);
      getEditorPagenation(currentPage, limitValue);
    }
  };

  //에디터 목록에서 클릭
  const handleEditorClick = (id) => {
    console.log("editor id :", id);
    sessionStorage.setItem("selectEditor", id);
    setSelectEditor(id);
  };

  //READY useEffect
  useEffect(() => {
    //에디터 목록 페이지네이션
    getEditorPagenation(1, limitValue);

    //세션에 저장된 선택한 에디터 가져오기
    const target = sessionStorage.getItem("selectEditor");

    //세션에 저장된 5스타 레시피 가져오기
    getEditorsRecipes(target);
  }, []);

  //에디터 클릭해서 state 변경시 동작
  useEffect(() => {
    getEditorsRecipes(selectEditor);
  }, [selectEditor]);

  return (
    <>
      <CustomLoading loading={loading} />

      <S.CenterBox>
        {/* <S.YearEditors>
          <h4>
            <span>냉슐랭</span> 에디터
          </h4>
        </S.YearEditors> */}
        <S.NextEditorContaner>
          <a onClick={handlePrevClick}>
            <S.NextPrev src={prevEditor} alt="prevEditor" />
          </a>
          <S.Section>
            {editorList.map((editor, index) => (
              <S.EditorLink
                key={editor._id + index}
                onClick={() => {
                  handleEditorClick(editor._id);
                }}
              >
                <S.ImageWrapper>
                  <S.EditorImage
                    style={{ pointerEvents: "none" }}
                    src={editor.profileImageURL}
                    alt={editor.nickName}
                    onError={(e) => {
                      e.target.src = editorDefaultImg;
                    }}
                  />
                </S.ImageWrapper>
                <p style={{ pointerEvents: "none" }}>{editor.nickName}</p>
              </S.EditorLink>
            ))}
          </S.Section>
          <a onClick={handleNextClick}>
            <S.NextPrev src={nextEditor} alt="nextEditor" />
          </a>
        </S.NextEditorContaner>
        {selectList.length !== 0 && (
          <S.EditorRecipes>
            <span>{selectList.recipes[0].writer.nickName}</span>
            님의 레시피
          </S.EditorRecipes>
        )}
        <S.BackgroundBox>
          <Contents foodList={selectList.recipes} />
        </S.BackgroundBox>
      </S.CenterBox>
    </>
  );
}

export default Editor;
