import { createSlice } from "@reduxjs/toolkit";

export const fridgeSlice = createSlice({
  name: "fridge",
  initialState: {
    ingredients: [],
  },
  reducers: {
    updateIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
  },
});

export const { updateIngredients } = fridgeSlice.actions;

export const selectFridge = (state) => state.fridge;

export default fridgeSlice.reducer;
