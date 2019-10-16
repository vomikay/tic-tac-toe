import { Action, ActionCreator } from "redux";

export const INPUT_USER_NAME = "INPUT_USER_NAME";

interface InputUserNameAction extends Action<typeof INPUT_USER_NAME> {
  payload: string;
}

export type UserAction = InputUserNameAction;

export const inputUserName: ActionCreator<InputUserNameAction> = (
  name: string
) => ({ type: INPUT_USER_NAME, payload: name });
