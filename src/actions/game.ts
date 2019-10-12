import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";

export const ADD_GAME = "ADD_GAME";

interface AddGameAction extends Action<typeof ADD_GAME> {
  payload: string;
}

export type GameAction = AddGameAction;

export const addGame: ActionCreator<
  ThunkAction<void, AppState, undefined, AddGameAction>
> = () => {
  return (dispatch, getState) => {
    if (getState().user.name) {
      dispatch({
        type: ADD_GAME,
        payload: getState().user.name
      });
    }
  };
};
