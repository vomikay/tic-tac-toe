import { createStore, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
import rootReducer from "../reducers";
import {
  persistStore,
  persistReducer,
  PERSIST,
  REHYDRATE
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { createStateSyncMiddleware } from "redux-state-sync";
import { INPUT_USER_NAME } from "../actions/user";

const syncConfig = {
  blacklist: [PERSIST, REHYDRATE, INPUT_USER_NAME]
};

const middlewares: Middleware[] = [
  thunk,
  createStateSyncMiddleware(syncConfig)
];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["games"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type AppState = ReturnType<typeof rootReducer>;

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  return { store, persistor };
};
