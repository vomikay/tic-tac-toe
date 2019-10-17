import { Action, ActionCreator } from "redux";

export const INPUT_NAME = "@user/INPUT_NAME";

export interface InputNameAction extends Action<typeof INPUT_NAME> {
  payload: { userName: string };
}

export const inputName: ActionCreator<InputNameAction> = (
  userName: string
) => ({
  type: INPUT_NAME,
  payload: { userName }
});
