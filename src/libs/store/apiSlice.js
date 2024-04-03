import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Recipes"],
  endpoints: (builder) => ({
    getMasterChief: builder.query({
      query: () => "/master-chief",
      providesTags: ["Recipes"],
    }),
    getPopularRecipes: builder.query({
      query: () => "/popular-recipes",
      providesTags: ["Recipes"],
    }),
    getRecipes: builder.query({
      query: ({ type, page }) => {
        return {
          url: "/recipes",
          params: { type, page },
        };
      },
      providesTags: ["Recipes"],
    }),
    setFridgeRecipes: builder.mutation({
      query: ({ type, page, ingredients }) => {
        return {
          url: "/search-ingredients-recipes",
          method: "POST",
          params: { type, page },
          body: { ingredients },
        };
      },
    }),
  }),
});
