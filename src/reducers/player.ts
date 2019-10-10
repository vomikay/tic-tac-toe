import { PlayerState } from "../store/types";
import { PlayerAction, INPUT_PLAYER_NAME } from "../actions/player";

const initialState: PlayerState = {
  name: ""
};

export function playerReducer(
  state = initialState,
  action: PlayerAction
): PlayerState {
  switch (action.type) {
    case INPUT_PLAYER_NAME:
      return {
        name: action.payload
      };
    default:
      return state;
  }
}
