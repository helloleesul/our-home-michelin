import { createSlice } from "@reduxjs/toolkit";

export const fridgeSlice = createSlice({
  name: "fridge",
  initialState: {
    ingredients: [],
  },
  reducers: {
    fetchIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
    removeIngredients: (state) => {
      state.ingredients = [];
    },
  },
});

export const { fetchIngredients, removeIngredients } = fridgeSlice.actions;

export const selectFridge = (state) => state.fridge;

export default fridgeSlice.reducer;
