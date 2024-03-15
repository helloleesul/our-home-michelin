import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { POST } from "../api";
import { fetchIngredients, removeIngredients } from "./fridgeSlice";

export const asyncLogin = createAsyncThunk(
  "auth/asyncLogin",
  async (data, { dispatch }) => {
    try {
      const response = await POST("/login", data);
      const { fridge, user } = response;
      dispatch(fetchIngredients(fridge));
      return user;
    } catch (error) {
      throw error.response.data.error;
    }
  }
);

export const asyncLogout = createAsyncThunk(
  "auth/asyncLogout",
  async (_, { dispatch }) => {
    try {
      await POST("/logout", {});
      dispatch(removeIngredients());
    } catch (error) {
      throw error;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // 로그인
    builder.addCase(asyncLogin.pending, (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
    });
    builder.addCase(asyncLogin.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(asyncLogin.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      console.log("🚀 ~ asyncLogin ~ rejected:", action.error.message);
    });
    // 로그아웃
    builder.addCase(asyncLogout.fulfilled, (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
    });
    builder.addCase(asyncLogout.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      console.log("🚀 ~ asyncLogout ~ rejected:", action.error.message);
    });
  },
});

export const { updateUser } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
