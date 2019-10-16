import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";
import { createStore, applyMiddleware } from "redux";
import { CREATE_GAME, JOIN_GAME, DO_STEP } from "../actions/game";
import { createStateSyncMiddleware } from "redux-state-sync";

export const history = createBrowserHistory();
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["games"]
};
const syncConfig = {
  whitelist: [CREATE_GAME, JOIN_GAME, DO_STEP]
};
const middlewares = [
  routerMiddleware(history),
  thunk,
  createLogger({
    predicate: () => process.env.NODE_ENV === "development",
    collapsed: true
  }),
  createStateSyncMiddleware(syncConfig)
];
const persistedReducer = persistReducer(persistConfig, rootReducer(history));
export type AppState = ReturnType<ReturnType<typeof rootReducer>>;
export default () => {
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  return { store, persistor };
};
