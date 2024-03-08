import { Navigate, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Join from "@/pages/Join";
import RecipeList from "@/pages/RecipeList";
import RecipeDetail from "@/pages/RecipeDetail";
import RecipeWrite from "@/pages/RecipeWrite";
import RecipeModify from "@/pages/RecipeModify";
import MyRecipes from "@/pages/MyRecipes";
import FavoriteRecipes from "@/pages/FavoriteRecipes";
import Info from "@/pages/Info";
import Leave from "@/pages/Leave";
import NotFound from "@/pages/NotFound";

import UserRoute from "@/components/router/UserRoute";
import GuestRoute from "@/components/router/GuestRoute";

import Kitchen from "@/components/layout/Kitchen";

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
        path: "recipes",
        children: [
          { index: true, element: <RecipeList /> },
          {
            path: ":detail",
            element: <RecipeDetail />,
          },
        ],
      },
      // 유저 접근 허용
      {
        element: <UserRoute />,
        children: [
          {
            path: "new-recipe",
            element: <RecipeWrite />,
          },
          {
            path: "recipes/modify",
            element: <RecipeModify />,
          },
          {
            path: "kitchen",
            element: <Kitchen />,
            children: [
              {
                index: true,
                element: <Navigate to="my-recipe" replace />,
              },
              {
                path: "my-recipe",
                element: <MyRecipes />,
              },
              {
                path: "favorite-recipe",
                element: <FavoriteRecipes />,
              },
              {
                path: "info",
                children: [
                  { index: true, element: <Info /> },
                  {
                    path: "leave",
                    element: <Leave />,
                  },
                ],
              },
            ],
          },
        ],
      },
      // 유저 접근 제한
      {
        element: <GuestRoute />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "join",
            element: <Join />,
          },
        ],
      },
      // 잘못된 경로
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
