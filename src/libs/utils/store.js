import { configureStore } from "@reduxjs/toolkit";
// 냉장고 식재료 리듀서
import fridgeReducer from "./fridgeIngrSlice";
// 레이아웃 관련 리듀서
import layoutReducer from "./layoutSlice";

const store = configureStore({
  reducer: {
    fridge: fridgeReducer,
    layout: layoutReducer,
  },
});

export default store;
