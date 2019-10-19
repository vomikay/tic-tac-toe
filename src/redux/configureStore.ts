import storage from "redux-persist/lib/storage";
import { History } from "history";
import { routerMiddleware, LOCATION_CHANGE } from "connected-react-router";
import thunk from "redux-thunk";
import { createStateSyncMiddleware } from "redux-state-sync";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";
import { createStore, applyMiddleware } from "redux";
import {
  persistReducer,
  persistStore,
  PERSIST,
  REHYDRATE
} from "redux-persist";
import gameCollector from "./middleware/gameCollector";

export default (history: History) => {
  const persistConfig = { key: "root", storage, blacklist: ["router"] };
  const syncConfig = {
    blacklist: [PERSIST, REHYDRATE, LOCATION_CHANGE]
  };
  const middlewares = [
    gameCollector,
    routerMiddleware(history),
    thunk,
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
