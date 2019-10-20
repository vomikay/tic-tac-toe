import { MiddlewareAPI } from "redux";
import IState from "../interfaces/IState";
import { CREATE, DO_STEP, remove, COMPLETE } from "../modules/game/gameActions";
import { ThunkDispatch } from "redux-thunk";
import GameAction from "../modules/game/GameAction";
import { goBack, RouterAction } from "connected-react-router";

type Dispatch = ThunkDispatch<IState, undefined, GameAction | RouterAction>;

const DELAY_TIME = 5 * 60 * 1000; // 5 min

let timer: NodeJS.Timeout;

const gameCollector = ({ getState }: MiddlewareAPI) => (next: Dispatch) => (
  action: GameAction
) => {
  const collect = (gameId: number) => {
    const { router } = getState();
    const { location } = router;
    const root = location.pathname.split("/")[1];
    root === "game" && next(goBack());
    setTimeout(() => next(remove(gameId)), 1000);
  };

  if (action.type === CREATE) {
    const { games } = getState();
    const last = Object.keys(games).pop();
    const nextId = last ? +last + 1 : 1;
    timer = setTimeout(() => collect(nextId), DELAY_TIME);
  }
  if (action.type === DO_STEP || action.type === COMPLETE) {
    timer && clearTimeout(timer);
    const { gameId } = action.payload;
    timer = setTimeout(() => collect(gameId), DELAY_TIME);
  }
  next(action);
};

export default gameCollector;
