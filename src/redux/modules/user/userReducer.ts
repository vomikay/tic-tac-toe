import { Reducer } from "redux";
import UserAction from "./UserAction";
import { INPUT_NAME } from "./userActions";

const initialState = "";

const userReducer: Reducer<string, UserAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case INPUT_NAME: {
      const { userName } = action.payload;
      return userName;
    }
    default:
      return state;
  }
};

export default userReducer;
