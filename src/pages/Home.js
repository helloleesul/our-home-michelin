import React, { useEffect, useState } from "react";
import * as S from "./Home.style";
import { Container } from "../components/common/Layout";
import Contents from "../components/pages/home/Contents";
import EditorBox from "../components/pages/editor/EditorBox";
import mainRefrigerator from "../assets/img/mainRefrigerator.png";
import PortalModal from "../components/common/PortalModal";
import MyFridge from "../components/MyFridge";
import requestApi from "../libs/const/api";

// 1) 가져와야될 3개 컨텐츠 데이터를 promise(병렬)로 호출(api 통신);
// 2) 상태 저장(setMainDatas)
// 3) return ( mainDatas 렌더링 )

function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [fiveStarRecipes, setFiveStarRecipes] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]);
  const [editorList, setEditorList] = useState([]);

  useEffect(() => {
    const getEditorList = async () => {
      try {
        const res = await requestApi("get", "/editors");
        setEditorList(res.editors);
        console.log(res.editors);
      } catch (error) {
        console.log(error);
      }
    };

    getEditorList(); // 함수 호출은 여기서 한 번만 실행됩니다.
  }, []);

  async function getInitData() {
    try {
      //5스타 레시피 가져오기
      const responseFiveStarRecipes = await requestApi(
        "get",
        "/fivestar-recipes?limit=5"
      ); // API 요청
      setFiveStarRecipes(responseFiveStarRecipes.fiveStarRecipes);

      //전체 레시피 가져오기
      const responseAllRecipes = await requestApi("get", "/recipes?limit=10");
      setAllRecipes(responseAllRecipes);
      sessionStorage.setItem("AllRecipes", JSON.stringify(responseAllRecipes));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getInitData(); // 컴포넌트가 마운트되면 데이터를 가져옴
  }, []); // 빈 배열을 넣어 마운트 시 한 번만 호출하도록 설정

  return (
    <S.Div>
      <S.RefrigeratorContainer onClick={() => setShowModal(true)}>
        <S.MainRefrigerator src={mainRefrigerator} alt="mainRefrigerator" />
        <p>
          냉장고에 <span>김치, 돼지고기...</span>가 있어요.
          <br />더 채우러 갈까요?
        </p>
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
        <EditorBox
          editorList={editorList}
          startIndex={startIndex}
          itemsPerPage={6}
        />
      </Container>
      <Container>
        <S.Text>
          <p>
            <span>5스타 </span>레시피
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
        <Contents foodList={allRecipes} />
      </Container>
    </S.Div>
  );
}

export default Home;
