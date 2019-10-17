import { Action, ActionCreator } from "redux";

export const INPUT_NAME = "@user/INPUT_NAME";

export interface InputNameAction extends Action<typeof INPUT_NAME> {
  payload: string;
}

export const inputName: ActionCreator<InputNameAction> = (name: string) => ({
  type: INPUT_NAME,
  payload: name
});
