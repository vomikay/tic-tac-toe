import { Action, ActionCreator } from "redux";
import { Result } from "../../interfaces/IGame";
import { ThunkAction } from "redux-thunk";
import IState from "../../interfaces/IState";
import { calculateResult } from "./gameUtils";
import { delay } from "q";

export const DEFAULT_GAME_SIZE = 3;
export const TIMER_DELAY_TIME = 2 * 1000; // 2 sec

export const CREATE = "@game/CREATE";
export const DO_STEP = "@game/DO_STEP";
export const COMPLETE = "@game/COMPLETE";
export const UPDATE_TIMER = "@game/UPDATE_TIMER";

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
      dispatch(updateTimer(games.length));
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
    const game = games[gameId - 1];
    if (game.state === "playing" && !game.field[row - 1][column - 1]) {
      dispatch({ type: DO_STEP, payload: { gameId, row, column } });
      const { games } = getState();
      const game = games[gameId - 1];
      const gameResult = calculateResult("owner", "opponent", game.field);
      if (gameResult !== "") {
        dispatch(complete(gameId, gameResult));
      }
      if (game.state === "playing" && !isBot) {
        dispatch(doStepBot(gameId));
      }
    }
  };
};

export const doStepBot: ActionCreator<
  ThunkAction<void, IState, undefined, DoStepAction | CompleteAction>
> = (gameId: number) => {
  return (dispatch, getState) => {
    const { games } = getState();
    const { field, size } = games[gameId - 1];
    if (!field.every(row => row.every(value => value !== ""))) {
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

export const surrender: ActionCreator<
  ThunkAction<void, IState, undefined, CompleteAction>
> = (gameId: number) => {
  return (dispatch, getState) => dispatch(complete(gameId, "opponent"));
};
