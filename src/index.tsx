import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import createStore from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { StylesProvider } from "@material-ui/core";

const { store, persistor } = createStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
