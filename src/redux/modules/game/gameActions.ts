import { Action, ActionCreator } from "redux";
import { Result } from "../../interfaces/IGame";
import { ThunkAction } from "redux-thunk";
import IState from "../../interfaces/IState";
import { calculateResult } from "./gameUtils";
import { delay } from "q";

export const DEFAULT_GAME_SIZE = 3;
export const UPDATE_TIME = 2 * 1000; // 2 sec

export const CREATE = "@game/CREATE";
export const DO_STEP = "@game/DO_STEP";
export const COMPLETE = "@game/COMPLETE";
export const UPDATE_TIMER = "@game/UPDATE_TIMER";
export const REMOVE = "@game/REMOVE";

export interface CreateAction extends Action<typeof CREATE> {
  payload: { userName: string; gameSize: number };
}

export interface DoStepAction extends Action<typeof DO_STEP> {
  payload: { gameId: number; row: number; column: number };
}

export interface CompleteAction extends Action<typeof COMPLETE> {
  payload: { gameId: number; gameResult: Result };
}

export interface UpdateTimerAction extends Action<typeof UPDATE_TIMER> {
  payload: { gameId: number; newDuration: number };
}

export interface RemoveAction extends Action<typeof REMOVE> {
  payload: { gameId: number };
}

export const create: ActionCreator<
  ThunkAction<void, IState, undefined, CreateAction | UpdateTimerAction>
> = (gameSize = DEFAULT_GAME_SIZE) => {
  return (dispatch, getState) => {
    const { userName } = getState();
    if (userName) {
      dispatch({ type: CREATE, payload: { userName, gameSize } });
      const { games } = getState();
      const last = Object.keys(games).pop();
      const lastId = last ? +last : 1;
      const { duration } = games[lastId];
      dispatch(updateTimer(lastId, duration + UPDATE_TIME));
    }
  };
};

export const complete: ActionCreator<CompleteAction> = (
  gameId: number,
  gameResult: Result
) => ({
  type: COMPLETE,
  payload: { gameId, gameResult }
});

export const doStep: ActionCreator<
  ThunkAction<void, IState, undefined, DoStepAction | CompleteAction>
> = (gameId: number, row: number, column: number, isBot = false) => {
  return (dispatch, getState) => {
    const { games } = getState();
    const game = games[gameId];
    const isEmpty = !game.field[row - 1][column - 1];
    if (game.state === "playing" && isEmpty) {
      dispatch({ type: DO_STEP, payload: { gameId, row, column } });
      const { games } = getState();
      const game = games[gameId];
      const { field } = game;
      const result = calculateResult("owner", "opponent", field);
      if (result !== "") {
        dispatch(complete(gameId, result));
      }
      if (game.state === "playing" && !isBot) {
        dispatch(doStepBot(gameId));
      }
    }
  };
};

export const doStepBot: ActionCreator<
  ThunkAction<void, IState, undefined, DoStepAction>
> = (gameId: number) => {
  return (dispatch, getState) => {
    const { games } = getState();
    const { field, size } = games[gameId];
    const isFull = field.every(row => row.every(value => value !== ""));
    if (!isFull) {
      let row, column;
      do {
        row = Math.floor(Math.random() * size) + 1;
        column = Math.floor(Math.random() * size) + 1;
      } while (field[row - 1][column - 1] !== "");
      dispatch(doStep(gameId, row, column, true));
    }
  };
};

export const updateTimer: ActionCreator<
  ThunkAction<void, IState, undefined, UpdateTimerAction>
> = (gameId: number, newDuration: number) => {
  return (dispatch, getState) =>
    delay(UPDATE_TIME)
      .then(() => {
        const { games } = getState();
        const { state } = games[gameId];
        if (state === "playing") {
          dispatch({ type: UPDATE_TIMER, payload: { gameId, newDuration } });
        }
      })
      .then(() => dispatch(updateTimer(gameId, newDuration + UPDATE_TIME)));
};

export const surrender: ActionCreator<
  ThunkAction<void, IState, undefined, CompleteAction>
> = (gameId: number) => {
  return dispatch => dispatch(complete(gameId, "opponent"));
};

export const remove: ActionCreator<RemoveAction> = (gameId: number) => ({
  type: REMOVE,
  payload: { gameId }
});
