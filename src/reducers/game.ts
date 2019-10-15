import { GameState } from "../store/types";
import { Reducer } from "redux";
import { GameAction, CREATE_GAME } from "../actions/game";

const initialState: GameState = [];

export const gameReducer: Reducer<GameState, GameAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CREATE_GAME:
      return [
        ...state,
        {
          token: (state.length + 1).toString(),
          owner: action.payload,
          opponent: "",
          size: 3,
          duration: 0,
          result: "",
          state: "ready",
          field: []
        }
      ];
    default:
      return state;
  }
};
