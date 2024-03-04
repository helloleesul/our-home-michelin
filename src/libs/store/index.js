import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import authReducer from "./authSlice";
import fridgeReducer from "./fridgeSlice";

const reducers = combineReducers({
  auth: authReducer,
  fridge: fridgeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "fridge"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
