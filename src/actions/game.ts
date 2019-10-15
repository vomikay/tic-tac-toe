import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";
import { push, RouterAction } from "connected-react-router";

const DEFAULT_GAME_SIZE = 3;

export const CREATE_GAME = "CREATE_GAME";
export const JOIN_GAME = "JOIN_GAME";

interface CreateGameAction extends Action<typeof CREATE_GAME> {
  payload: { userName: string; gameSize: number };
}

interface JoinGameAction extends Action<typeof JOIN_GAME> {
  payload: { userName: string; gameId: number };
}

export type GameAction = CreateGameAction | JoinGameAction;

export const createGame: ActionCreator<
  ThunkAction<void, AppState, undefined, CreateGameAction | RouterAction>
> = (size = DEFAULT_GAME_SIZE) => {
  return (dispatch, getState) => {
    const { name: userName } = getState().user;
    if (userName) {
      dispatch({ type: CREATE_GAME, payload: { userName, gameSize: size } });
      const games = getState().games;
      const { id } = games[games.length - 1];
      dispatch(push(`/game/${id}`));
    }
  };
};

export const joinGame: ActionCreator<
  ThunkAction<void, AppState, undefined, JoinGameAction | RouterAction>
> = (id: number) => {
  return (dispatch, getState) => {
    const { name: userName } = getState().user;
    const game = getState().games[+id - 1];
    if (userName && userName !== game.owner && game.state === "ready") {
      dispatch({ type: JOIN_GAME, payload: { userName, gameId: id } });
      dispatch(push(`/game/${id}`));
    }
  };
};
