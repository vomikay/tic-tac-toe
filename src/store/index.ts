import { createStore, combineReducers, applyMiddleware } from "redux";
import { playerReducer } from "../reducers/player";
import logger from "redux-logger";

const reducers = combineReducers({
  player: playerReducer
});

export type AppState = ReturnType<typeof reducers>;

const store = createStore(reducers, applyMiddleware(logger));
export default store;
