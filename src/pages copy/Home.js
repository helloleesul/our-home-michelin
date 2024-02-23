import React, { useEffect, useState } from "react";
import * as S from "./Home.style";
import { Container } from "../components/common/Layout";
import Contents from "../components/pages/home/Contents";
import EditorBox from "../components/pages/editor/EditorBox";
import mainRefrigerator from "../assets/img/mainRefrigerator.png";
import PortalModal from "../components/common/PortalModal";
import MyFridge from "../components/MyFridge";
import requestApi from "../libs/const/api";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../libs/utils/layoutSlice";
import useAuthStatus from "../libs/hooks/useAuthStatus";

function Home() {
  const { isAuth } = useAuthStatus();
  const storeAuth = useSelector((state) => state.layout.isAuth);
  const [showModal, setShowModal] = useState(false);
  const [fiveStarRecipes, setFiveStarRecipes] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]);
  const [editorList, setEditorList] = useState([]);

  const dispatch = useDispatch();

  //에디터 목록 가져오기
  const getEditorList = async () => {
    dispatch(setLoading(true));
    try {
      const res = await requestApi("get", "/editors");
      const list = res.editors.map((editor) => ({
        _id: editor._id,
        nickName: editor.nickName,
        profileImageURL: editor.profileImageURL,
      }));
      // console.log(list);
      setEditorList(list);
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
      const res = await requestApi("get", "/recipes?limit=10");
      setAllRecipes(res);
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getEditorList();
  //   getFivestarRecipe();
  //   getAllRecipes();
  // }, []);

  return (
    <>
      <S.Div>
        {/* <S.RefrigeratorContainer onClick={() => setShowModal(true)}>
          <S.MainRefrigerator src={mainRefrigerator} alt="mainRefrigerator" />
          <div>
            {storeAuth ? (
              <>
                <p>나만의 냉장고에</p>
                <p>
                  <span>식재료들</span>을 더 채우러 갈까요?
                </p>
              </>
            ) : (
              <>
                <p>로그인해서</p>
                <p>
                  <span>나만의 냉장고</span>를 채워보세요!
                </p>
              </>
            )}
            <h3 className="go-fill">채우러가기 ╰(*°▽°*)╯</h3>
          </div>
        </S.RefrigeratorContainer> */}
        {/* <PortalModal handleShowModal={showModal} size={"40%"}>
          <MyFridge onClose={() => setShowModal(false)} />
        </PortalModal> */}
        <Container>
          <S.Text>
            <p>
              <span>냉슐랭 </span>에디터
            </p>
            <S.SeeMoreLink to="/editor">더보기</S.SeeMoreLink>
          </S.Text>
          {/* <EditorBox editorList={editorList} /> */}
        </Container>
        <Container>
          <S.Text>
            <p>
              <span>인기 </span>레시피
            </p>
            <S.SeeMoreLink to="/recipe/popular">더보기</S.SeeMoreLink>
          </S.Text>
          {/* <Contents foodList={fiveStarRecipes} /> */}
        </Container>
        <Container>
          <S.Text>
            <p>
              <span>전체 </span>레시피
            </p>
            <S.SeeMoreLink to="/recipe/all">더보기</S.SeeMoreLink>
          </S.Text>
          {/* <Contents foodList={allRecipes} /> */}
        </Container>
      </S.Div>
    </>
  );
}

export default Home;
