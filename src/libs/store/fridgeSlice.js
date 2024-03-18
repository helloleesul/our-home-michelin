import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET, POST } from "../api";

export const asyncFridge = createAsyncThunk("fridge/asyncFridge", async () => {
  try {
    const response = await GET("/myfridge");
    return response;
  } catch (error) {
    throw error.response.data.error;
  }
});

export const ingredientsPost = createAsyncThunk(
  "fridge/ingredientsPost",
  async (data) => {
    try {
      const response = await POST("/myfridge", data);
      return response;
    } catch (error) {
      throw error.response.data.error;
    }
  }
);

export const fridgeSlice = createSlice({
  name: "fridge",
  initialState: {
    ingredients: [],
  },
  reducers: {
    resetIngredients: (state) => {
      state.ingredients = [];
    },
  },
  extraReducers: (builder) => {
    // 냉장고 조회
    builder.addCase(asyncFridge.pending, (state, action) => {
      state.ingredients = [];
    });
    builder.addCase(asyncFridge.fulfilled, (state, action) => {
      state.ingredients = action.payload;
    });
    builder.addCase(asyncFridge.rejected, (state, action) => {
      state.ingredients = [];
      console.log("🚀 ~ asyncLogin ~ rejected:", action.error.message);
    });
    // 재료 추가
    builder.addCase(ingredientsPost.fulfilled, (state, action) => {
      state.ingredients = action.payload;
    });
    builder.addCase(ingredientsPost.rejected, (state, action) => {
      console.log("🚀 ~ ingredientsPost ~ rejected:", action.error.message);
    });
  },
});

export const { resetIngredients } = fridgeSlice.actions;

export const selectFridge = (state) => state.fridge;

export default fridgeSlice.reducer;
