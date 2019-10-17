import storage from "redux-persist/lib/storage";
import { History } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createStateSyncMiddleware } from "redux-state-sync";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import { createStore, applyMiddleware } from "redux";
import { CREATE, JOIN, DO_STEP, COMPLETE } from "./modules/game/gameActions";

export default (history: History) => {
  const persistConfig = { key: "root", storage, whitelist: ["games"] };
  const syncConfig = { whitelist: [CREATE, JOIN, DO_STEP, COMPLETE] };
  const middlewares = [
    thunk,
    routerMiddleware(history),
    createStateSyncMiddleware(syncConfig),
    createLogger({
      predicate: () => process.env.NODE_ENV === "development",
      collapsed: true
    })
  ];
  const persistedReducer = persistReducer(persistConfig, rootReducer(history));
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  return { store, persistor };
};
