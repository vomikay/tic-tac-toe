import IUserState from "../../interfaces/IUserState";
import { Reducer } from "redux";
import UserAction from "./UserAction";
import { INPUT_NAME } from "./userActions";

const initialState: IUserState = {
  name: ""
};

const userReducer: Reducer<IUserState, UserAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case INPUT_NAME:
      return { name: action.payload };
    default:
      return state;
  }
};

export default userReducer;
