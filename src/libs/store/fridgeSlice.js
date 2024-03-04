import { createSlice } from "@reduxjs/toolkit";

export const fridgeSlice = createSlice({
  name: "fridge",
  initialState: {
    ingrData: [],
  },
  reducers: {
    updateIngrData: (state, action) => {
      state.ingrData = action.payload;
    },
  },
});

export const { updateIngrData } = fridgeSlice.actions;

export const selectFridge = (state) => state.fridge;

export default fridgeSlice.reducer;
