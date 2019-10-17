import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "./redux";
import { StylesProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import App from "./App";
import "./index.css";

const history = createBrowserHistory();
const { store, persistor } = configureStore(history);

ReactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </StylesProvider>,
  document.getElementById("root")
);
