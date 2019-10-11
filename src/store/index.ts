import { createStore, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
import rootReducer from "../reducers";

const middlewares: Middleware[] = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export type AppState = ReturnType<typeof rootReducer>;
export default store;
