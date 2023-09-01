// global style
import { Global } from "@emotion/react";
import { resetStyles } from "./App.style";
// router
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/common/Layout";
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import NotFound from "./pages/NotFound";
import RecipeWrite from "./pages/RecipeWrite";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import Editor from "./pages/Editor";
import MyPage from "./pages/MyPage";
import MyInfo from "./pages/MyInfo";

import useAuthStatus from "./libs/hooks/useAuthStatus";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import Loading from "./components/common/GlobalLoading";

function App() {
  const { isAuth } = useAuthStatus();
  const isLoading = useSelector((state) => state.layout.isLoading);

  return (
    <>
      <Global styles={resetStyles} />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/login"
            element={!isAuth ? <Login /> : <Navigate replace to={"/"} />}
          ></Route>
          <Route
            path="/join"
            element={!isAuth ? <Join /> : <Navigate replace to={"/"} />}
          ></Route>
          <Route path="/editor" element={<Editor />}></Route>
          <Route
            path="/recipe/popular"
            element={<RecipeList title="인기 레시피" />}
          ></Route>
          <Route
            path="/recipe/all"
            element={<RecipeList title="전체 레시피" />}
          ></Route>
          <Route path="/recipe/:detail" element={<RecipeDetail />}></Route>
          <Route
            path="/recipe/write"
            element={
              !isAuth ? <Navigate replace to={"/login"} /> : <RecipeWrite />
            }
          ></Route>
          <Route
            path="/recipe/update/:recipeId"
            element={<RecipeWrite />}
          ></Route>

          <Route
            path="/mypage"
            element={isAuth ? <MyPage /> : <Navigate replace to={"/"} />}
          ></Route>
          <Route
            path="/mypage/info"
            element={isAuth ? <MyInfo /> : <Navigate replace to={"/"} />}
          ></Route>

          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
      {isLoading && createPortal(<Loading />, document.body)}
    </>
  );
}

export default App;
