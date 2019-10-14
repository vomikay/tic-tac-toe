import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";
import { push, CallHistoryMethodAction } from "connected-react-router";

export const ADD_GAME = "ADD_GAME";

interface AddGameAction extends Action<typeof ADD_GAME> {
  payload: string;
}

export type GameAction = AddGameAction;

export const addGame: ActionCreator<
  ThunkAction<
    void,
    AppState,
    undefined,
    AddGameAction | CallHistoryMethodAction
  >
> = () => {
  return (dispatch, getState) => {
    const { name } = getState().user;
    if (name) {
      dispatch({
        type: ADD_GAME,
        payload: name
      });
      const games = getState().games;
      const { token } = games[games.length - 1];
      dispatch(push(`/game/${token}`));
    }
  };
};
