// global style
import { Global, css } from "@emotion/react";
import reset from "styled-reset";
// router
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const resetFont = `"Pretendard Variable", Pretendard, -apple-system,
  BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
  "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`;

const resetStyles = css`
  ${reset}
  html,body, #root {
    height: 100%;
  }
  body,
  input,
  textarea,
  button {
    font-family: ${resetFont};
  }
`;

function App() {
  return (
    <>
      <Global styles={resetStyles} />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/recipe" element={<RecipeList />}></Route>
            <Route path="/editor" element={<Editor />}></Route>
            <Route path="/recipe/:detail" element={<RecipeDetail />}></Route>
            <Route path="/recipe/write" element={<RecipeWrite />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="/mypage/info" element={<MyInfo />}></Route>

            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
