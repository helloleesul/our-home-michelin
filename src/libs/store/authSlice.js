import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    isConfirm: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.isConfirm = false;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.isConfirm = false;
      state.user = null;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    confirmed: (state) => {
      state.isConfirm = true;
    },
  },
});

export const { login, logout, updateUser, confirmed } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
