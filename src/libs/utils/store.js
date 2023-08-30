import { configureStore } from "@reduxjs/toolkit";
// 냉장고 식재료 리듀서
import fridgeReducer from "./fridgeIngrSlice";

const store = configureStore({
  reducer: {
    // 냉장고 식재료 리듀서 등록
    fridge: fridgeReducer,
  },
});

export default store;
