import React, { useEffect, useState } from "react";
import * as S from "./Home.style";
import { Container } from "../components/common/Layout";
import Contents from "../components/pages/home/Contents";
import EditorBox from "../components/pages/editor/EditorBox";
import mainRefrigerator from "../assets/img/mainRefrigerator.png";
import PortalModal from "../components/common/PortalModal";
import MyFridge from "../components/MyFridge";
import requestApi from "../libs/const/api";
import CustomLoading from "../components/CustomLoading";
import useAuthStatus from "../libs/hooks/useAuthStatus";

function Home() {
  const { isAuth } = useAuthStatus();
  const [showModal, setShowModal] = useState(false);
  const [fiveStarRecipes, setFiveStarRecipes] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]);
  const [editorList, setEditorList] = useState([]);
  const [sortList, setSortList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limitRecipes, setLimitRecipes] = useState([]);

  //에디터 목록 가져오기
  const getEditorList = async () => {
    setLoading(true);
    try {
      const res = await requestApi("get", "/editors");
      setEditorList(res.editors);
    } catch (error) {
      console.log(error);
    }
  };

  //5스타 레시피 가져오기
  const getFivestarRecipe = async () => {
    try {
      const res = await requestApi("get", "/fivestar-recipes?limit=5");
      setFiveStarRecipes(res.fiveStarRecipes);
    } catch (error) {
      console.log(error);
    }
  };

  //전체 레시피 가져오기
  const getAllRecipes = async () => {
    try {
      const recipeArray = await requestApi("get", "/recipes");
      setAllRecipes(recipeArray);
      setLimitRecipes(recipeArray.slice(0, 10));
      sessionStorage.setItem("AllRecipes", JSON.stringify(recipeArray));

      // 에디터 목록 배열을 맵으로 순회하며 likeCount를 더해줌
      const updatedEditorList = editorList.map((editor) => {
        editor.likeCount = 0;
        const editorCopy = { ...editor };
        const matchingRecipe = recipeArray.find(
          (recipe) => recipe.writer === editor._id
        );
        if (matchingRecipe) {
          editorCopy.likeCount = editorCopy.likeCount
            ? editorCopy.likeCount + matchingRecipe.likeCount
            : matchingRecipe.likeCount;
        }
        return editorCopy;
      });

      // likeCount를 기준으로 에디터 목록을 정렬하는 함수
      const sortedEditorList = updatedEditorList.sort(
        (a, b) => b.likeCount - a.likeCount
      );

      setSortList(sortedEditorList);
      if (sortedEditorList.length > 0) setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEditorList();
    getFivestarRecipe();
  }, []);

  useEffect(() => {
    getAllRecipes();
  }, [editorList]);

  return (
    <>
      <CustomLoading loading={loading} />

      <S.Div>
        <S.RefrigeratorContainer onClick={() => setShowModal(true)}>
          <S.MainRefrigerator src={mainRefrigerator} alt="mainRefrigerator" />
          <div>
            {isAuth ? (
              <>
                <p>
                  나만의 냉장고에
                </p>
                <p><span>식재료들을</span>더 채우러 갈까요?</p>
              </>
            ) : (
              <>
                <p>로그인해서</p>
                <p> <span>나만의 냉장고</span>를 채워보세요!</p>
              </>
            )}
            <GoFill>채우러가기 ╰(*°▽°*)╯</GoFill>
          </div>
        </S.RefrigeratorContainer>
        <PortalModal handleShowModal={showModal} size={"40%"}>
          <MyFridge onClose={() => setShowModal(false)} />
        </PortalModal>
        <Container>
          <S.Text>
            <p>
              <span>냉슐랭 </span>에디터
            </p>
            <S.SeeMoreLink to="/editor">더보기</S.SeeMoreLink>
          </S.Text>
          <EditorBox editorList={sortList} />
        </Container>
        <Container>
          <S.Text>
            <p>
              <span>인기 </span>레시피
            </p>
            <S.SeeMoreLink to="/recipe/popular">더보기</S.SeeMoreLink>
          </S.Text>
          <Contents foodList={fiveStarRecipes} />
        </Container>
        <Container>
          <S.Text>
            <p>
              <span>전체 </span>레시피
            </p>
            <S.SeeMoreLink to="/recipe/all">더보기</S.SeeMoreLink>
          </S.Text>
          <Contents foodList={limitRecipes} />
        </Container>
      </S.Div>
    </>
  );
}

export default Home;
