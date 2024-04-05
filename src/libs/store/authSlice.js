import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { POST } from "../api";
import { fetchFridge, resetIngredients } from "./fridgeSlice";
import { redirect } from "react-router-dom";

export const asyncLogin = createAsyncThunk(
  "auth/asyncLogin",
  async (data, { dispatch }) => {
    try {
      const response = await POST("/login", data);
      const { user } = response;
      dispatch(fetchFridge());
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
      dispatch(resetIngredients());
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
      redirect("/");
    });
    builder.addCase(asyncLogin.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      alert(action.error.message);
    });
    // 로그아웃
    builder.addCase(asyncLogout.fulfilled, (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
    });
    builder.addCase(asyncLogout.rejected, (state, action) => {
      alert(action.error.message);
    });
  },
});

export const { updateUser } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
