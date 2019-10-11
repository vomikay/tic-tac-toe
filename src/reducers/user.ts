import { UserState } from "../store/types";
import { UserAction, INPUT_USER_NAME } from "../actions/user";
import { Reducer } from "redux";

const initialState: UserState = {
  name: ""
};

export const userReducer: Reducer<UserState, UserAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case INPUT_USER_NAME:
      return { name: action.payload };
    default:
      return state;
  }
};
