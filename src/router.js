import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import RecipeWrite from "./pages/RecipeWrite";
import MyRecipes from "./pages/MyRecipes";
import LikeRecipes from "./pages/LikeRecipes";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
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
        path: "recipes",
        element: <RecipeList />,
      },
      {
        path: "recipes/:detail",
        element: <RecipeDetail />,
      },
      {
        path: "new-recipe",
        element: <RecipeWrite />,
      },
      {
        path: "recipes/modify/:recipeId",
        element: <RecipeWrite />,
      },
      {
        path: "mypage/myRecipes",
        element: <MyRecipes />,
      },
      {
        path: "mypage/likeRecipes",
        element: <LikeRecipes />,
      },
      {
        path: "mypage/info",
        element: <Info />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
