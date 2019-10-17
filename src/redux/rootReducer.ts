import { combineReducers } from "redux";
import { History } from "history";
import gameReducer from "./modules/game/gameReducer";
import userReducer from "./modules/user/userReducer";
import { connectRouter } from "connected-react-router";

const rootReducer = (history: History) =>
  combineReducers({
    games: gameReducer,
    userName: userReducer,
    router: connectRouter(history)
  });
export default rootReducer;
