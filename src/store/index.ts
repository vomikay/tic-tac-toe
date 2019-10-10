import { createStore, combineReducers, applyMiddleware } from "redux";
import { playerReducer } from "../reducers/player";
import logger from "redux-logger";

const reducers = combineReducers({
  player: playerReducer
});

const store = createStore(reducers, applyMiddleware(logger));
export default store;
