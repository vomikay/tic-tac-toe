import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";
import { push, RouterAction } from "connected-react-router";
import { calculateWinner } from "../utils/game";

const DEFAULT_GAME_SIZE = 3;

export const CREATE_GAME = "CREATE_GAME";
export const JOIN_GAME = "JOIN_GAME";
export const DO_STEP = "DO_STEP";

interface CreateGameAction extends Action<typeof CREATE_GAME> {
  payload: { userName: string; gameSize: number };
}

interface JoinGameAction extends Action<typeof JOIN_GAME> {
  payload: { userName: string; gameId: number };
}

interface DoStepAction extends Action<typeof DO_STEP> {
  payload: { gameId: number; row: number; column: number };
}

export type GameAction = CreateGameAction | JoinGameAction | DoStepAction;

export const createGame: ActionCreator<
  ThunkAction<void, AppState, undefined, CreateGameAction | RouterAction>
> = (gameSize = DEFAULT_GAME_SIZE) => {
  return (dispatch, getState) => {
    const { user } = getState();
    const { name: userName } = user;
    if (userName) {
      dispatch({ type: CREATE_GAME, payload: { userName, gameSize } });
      const { games } = getState();
      const { id } = games[games.length - 1];
      dispatch(push(`/game/${id}`));
    }
  };
};

export const joinGame: ActionCreator<
  ThunkAction<void, AppState, undefined, JoinGameAction | RouterAction>
> = (gameId: number) => {
  return (dispatch, getState) => {
    const { user, games } = getState();
    const { name: userName } = user;
    const game = games[gameId - 1];
    if (game.state === "ready" && userName !== game.owner) {
      dispatch({ type: JOIN_GAME, payload: { userName, gameId } });
      dispatch(push(`/game/${gameId}`));
    }
  };
};

export const doStep: ActionCreator<
  ThunkAction<void, AppState, undefined, DoStepAction>
> = (gameId: number, row: number, column: number) => {
  return (dispatch, getState) => {
    const { user, games } = getState();
    const game = games[gameId - 1];
    const { name: userName } = user;
    if (
      game.state === "playing" &&
      userName === game[game.turn] &&
      !game.field[row - 1][column - 1]
    ) {
      dispatch({ type: DO_STEP, payload: { gameId, row, column } });
      const { games } = getState();
      const game = games[gameId - 1];
      const winner = calculateWinner(game.owner, game.opponent, game.field);
      if (winner) {
        console.log(winner);
      }
    }
  };
};
