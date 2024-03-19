import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DELETE, GET, POST, PUT } from "../api";

export const fetchFridge = createAsyncThunk("fridge/fetchFridge", async () => {
  try {
    const response = await GET("/myfridge");
    return response;
  } catch (error) {
    throw error.response.data.error;
  }
});

export const newIngredients = createAsyncThunk(
  "fridge/newIngredients",
  async (data) => {
    try {
      const response = await POST("/myfridge", { ingredients: data });
      return response;
    } catch (error) {
      throw error.response.data.error;
    }
  }
);

export const updateIngredients = createAsyncThunk(
  "fridge/updateIngredients",
  async ({ id, data }) => {
    try {
      const response = await PUT(`/myfridge/${id}`, { newBestBefore: data });
      return response;
    } catch (error) {
      throw error.response.data.error;
    }
  }
);

export const deleteIngredients = createAsyncThunk(
  "fridge/deleteIngredients",
  async (id) => {
    try {
      const response = await DELETE(`/myfridge/${id}`, {});
      return response;
    } catch (error) {
      throw error.response.data.error;
    }
  }
);

export const deleteAllIngredients = createAsyncThunk(
  "fridge/deleteAllIngredients",
  async () => {
    try {
      const response = await DELETE(`/myfridge`, {});
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
    builder.addCase(fetchFridge.pending, (state, action) => {
      state.ingredients = [];
    });
    builder.addCase(fetchFridge.fulfilled, (state, action) => {
      state.ingredients = action.payload;
    });
    builder.addCase(fetchFridge.rejected, (state, action) => {
      state.ingredients = [];
      console.log("🚀 ~ asyncLogin ~ rejected:", action.error.message);
    });
    // 재료 추가
    builder.addCase(newIngredients.fulfilled, (state, action) => {
      state.ingredients = action.payload.ingredients;
    });
    builder.addCase(newIngredients.rejected, (state, action) => {
      console.log("🚀 ~ newIngredients ~ rejected:", action.error.message);
    });
    // 재료 수정
    builder.addCase(updateIngredients.fulfilled, (state, action) => {
      state.ingredients = action.payload.ingredients;
    });
    builder.addCase(updateIngredients.rejected, (state, action) => {
      console.log("🚀 ~ updateIngredients ~ rejected:", action.error.message);
    });
    // 재료 삭제
    builder.addCase(deleteIngredients.fulfilled, (state, action) => {
      state.ingredients = action.payload.ingredients;
    });
    builder.addCase(deleteIngredients.rejected, (state, action) => {
      console.log("🚀 ~ deleteIngredients ~ rejected:", action.error.message);
    });
    // 재료 전체 삭제
    builder.addCase(deleteAllIngredients.fulfilled, (state, action) => {
      state.ingredients = action.payload.ingredients;
    });
    builder.addCase(deleteAllIngredients.rejected, (state, action) => {
      console.log(
        "🚀 ~ deleteAllIngredients ~ rejected:",
        action.error.message
      );
    });
  },
});

export const { resetIngredients } = fridgeSlice.actions;

export const selectFridge = (state) => state.fridge;

export default fridgeSlice.reducer;
