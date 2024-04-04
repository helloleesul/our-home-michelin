import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

import App from "./App";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Join = lazy(() => import("./pages/Join"));

const RecipeList = lazy(() => import("./pages/RecipeList"));
const RecipeDetail = lazy(() => import("./pages/RecipeDetail"));
const RecipeWrite = lazy(() => import("./pages/RecipeWrite"));
const RecipeModify = lazy(() => import("./pages/RecipeModify"));

const MyRecipes = lazy(() => import("./pages/MyRecipes"));
const FavoriteRecipes = lazy(() => import("./pages/FavoriteRecipes"));
const Info = lazy(() => import("./pages/Info"));
const Leave = lazy(() => import("./pages/Leave"));

const NotFound = lazy(() => import("./pages/NotFound"));

const UserRoute = lazy(() => import("./components/routerGuard/UserRoute"));
const GuestRoute = lazy(() => import("./components/routerGuard/GuestRoute"));

const Kitchen = lazy(() => import("./components/layout/Kitchen"));

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
