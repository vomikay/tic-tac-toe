import { Action, ActionCreator } from "redux";
import { Result } from "../../interfaces/IGame";
import { ThunkAction } from "redux-thunk";
import { RouterAction, push } from "connected-react-router";
import IState from "../../interfaces/IState";
import { calculateResult } from "./gameUtils";
import { delay } from "q";

export const DEFAULT_GAME_SIZE = 3;
export const TIMER_DELAY_TIME = 2 * 1000; // 2 sec

export const CREATE = "@game/CREATE";
export const JOIN = "@game/JOIN";
export const DO_STEP = "@game/DO_STEP";
export const COMPLETE = "@game/COMPLETE";
export const UPDATE_TIMER = "@game/UPDATE_TIMER";

export interface CreateAction extends Action<typeof CREATE> {
  payload: { userName: string; gameSize: number };
}

export interface JoinAction extends Action<typeof JOIN> {
  payload: { userName: string; gameId: number };
}

export interface DoStepAction extends Action<typeof DO_STEP> {
  payload: { gameId: number; row: number; column: number };
}

export interface CompleteAction extends Action<typeof COMPLETE> {
  payload: { gameId: number; gameResult: Result };
}

export interface UpdateTimerAction extends Action<typeof UPDATE_TIMER> {
  payload: { gameId: number };
}

export const create: ActionCreator<
  ThunkAction<void, IState, undefined, CreateAction | RouterAction>
> = (gameSize = DEFAULT_GAME_SIZE) => {
  return (dispatch, getState) => {
    const { user } = getState();
    const { name: userName } = user;
    if (userName) {
      dispatch({ type: CREATE, payload: { userName, gameSize } });
      const { games } = getState();
      const { id } = games[games.length - 1];
      dispatch(push(`/game/${id}`));
    }
  };
};

export const join: ActionCreator<
  ThunkAction<
    void,
    IState,
    undefined,
    JoinAction | RouterAction | UpdateTimerAction
  >
> = (gameId: number) => {
  return (dispatch, getState) => {
    const { user, games } = getState();
    const { name: userName } = user;
    const game = games[gameId - 1];
    if (game.state === "ready" && userName !== game.owner) {
      dispatch({ type: JOIN, payload: { userName, gameId } });
      dispatch(push(`/game/${gameId}`));
      dispatch(updateTimer(gameId));
    }
  };
};

export const doStep: ActionCreator<
  ThunkAction<void, IState, undefined, DoStepAction | CompleteAction>
> = (gameId: number, row: number, column: number) => {
  return (dispatch, getState) => {
    const { user, games } = getState();
    const game = games[gameId - 1];
    const { name: userName } = user;
    if (
      game.state === "playing" &&
      userName === game[game.nextTurn] &&
      !game.field[row - 1][column - 1]
    ) {
      dispatch({ type: DO_STEP, payload: { gameId, row, column } });
      const { games } = getState();
      const game = games[gameId - 1];
      const gameResult = calculateResult("owner", "opponent", game.field);
      if (gameResult !== "") {
        dispatch({ type: COMPLETE, payload: { gameId, gameResult } });
      }
    }
  };
};

export const updateTimer: ActionCreator<
  ThunkAction<void, IState, undefined, UpdateTimerAction | CompleteAction>
> = (gameId: number) => {
  return (dispatch, getState) =>
    delay(TIMER_DELAY_TIME)
      .then(() => {
        const { games } = getState();
        const { state } = games[gameId - 1];
        if (state === "playing") {
          dispatch({ type: UPDATE_TIMER, payload: { gameId } });
        }
      })
      .then(() => dispatch(updateTimer(gameId)));
};
