import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";

import authReducer from "./authSlice";
import fridgeReducer from "./fridgeSlice";
import { apiSlice } from "./apiSlice";

const reducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  fridge: fridgeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "fridge"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const reduxPersistActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [...reduxPersistActions],
      },
    }).concat(apiSlice.middleware),
});

export default store;
