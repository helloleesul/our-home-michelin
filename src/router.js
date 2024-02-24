import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import RecipeWrite from "./pages/RecipeWrite";
import MyPage from "./pages/MyPage";
import MyInfo from "./pages/MyInfo";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "join",
        element: <Join />,
      },
      {
        path: "recipe",
        element: <RecipeList />,
      },
      {
        path: "recipe/:detail",
        element: <RecipeDetail />,
      },
      {
        path: "new-recipe",
        element: <RecipeWrite />,
      },
      {
        path: "recipe/modify/:recipeId",
        element: <RecipeWrite />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
      {
        path: "mypage/info",
        element: <MyInfo />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
