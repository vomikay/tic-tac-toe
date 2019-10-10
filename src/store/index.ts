import { createStore, combineReducers } from "redux";
import { playerReducer } from "../reducers/player";

const reducers = combineReducers({
  player: playerReducer
});

const store = createStore(reducers);
export default store;
