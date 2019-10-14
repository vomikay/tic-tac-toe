import { combineReducers } from "redux";
import { userReducer } from "./user";
import { gameReducer } from "./game";
import { History } from "history";
import { connectRouter } from "connected-react-router";

const rootReducer = (history: History) =>
  combineReducers({
    user: userReducer,
    games: gameReducer,
    router: connectRouter(history)
  });

export default rootReducer;
