import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";
import { push, RouterAction } from "connected-react-router";

export const CREATE_GAME = "CREATE_GAME";

interface CreateGameAction extends Action<typeof CREATE_GAME> {
  payload: string;
}

export type GameAction = CreateGameAction;

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
