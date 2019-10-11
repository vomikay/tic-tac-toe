export const INPUT_PLAYER_NAME = "INPUT_PLAYER_NAME";

interface InputUserNameAction {
  type: typeof INPUT_PLAYER_NAME;
  payload: string;
}

export type UserAction = InputUserNameAction;

export function inputUserName(name: string): InputUserNameAction {
  return {
    type: INPUT_PLAYER_NAME,
    payload: name
  };
}
