import { UserState } from "../store/types";
import { UserAction, INPUT_PLAYER_NAME } from "../actions/user";

const initialState: UserState = {
  name: ""
};

export function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case INPUT_PLAYER_NAME:
      return {
        name: action.payload
      };
    default:
      return state;
  }
}
