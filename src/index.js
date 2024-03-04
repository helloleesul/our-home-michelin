import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { Provider as ReduxProvider } from "react-redux";
import store from "./libs/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import { Global } from "@emotion/react";
import { resetStyles } from "./styles/global";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Global styles={resetStyles} />
      <RouterProvider router={router} />
    </PersistGate>
  </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
