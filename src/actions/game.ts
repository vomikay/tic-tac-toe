import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";
import { push, RouterAction } from "connected-react-router";

export const CREATE_GAME = "CREATE_GAME";
export const JOIN_GAME = "JOIN_GAME";

interface CreateGameAction extends Action<typeof CREATE_GAME> {
  payload: string;
}

interface JoinGameAction extends Action<typeof JOIN_GAME> {
  payload: { userName: string; gameToken: string };
}

export type GameAction = CreateGameAction | JoinGameAction;

export const createGame: ActionCreator<
  ThunkAction<void, AppState, undefined, CreateGameAction | RouterAction>
> = () => {
  return (dispatch, getState) => {
    const { name } = getState().user;
    if (name) {
      dispatch({ type: CREATE_GAME, payload: name });
      const games = getState().games;
      const { token } = games[games.length - 1];
      dispatch(push(`/game/${token}`));
    }
  };
};

export const joinGame: ActionCreator<
  ThunkAction<void, AppState, undefined, JoinGameAction | RouterAction>
> = (gameToken: string) => {
  return (dispatch, getState) => {
    const { name: userName } = getState().user;
    const game = getState().games[+gameToken - 1];
    if (userName && userName !== game.owner && game.state === "ready") {
      dispatch({ type: JOIN_GAME, payload: { userName, gameToken } });
      dispatch(push(`/game/${gameToken}`));
    }
  };
};
