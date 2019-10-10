export const INPUT_PLAYER_NAME = "INPUT_PLAYER_NAME";

interface InputPlayerNameAction {
  type: typeof INPUT_PLAYER_NAME;
  payload: string;
}

export type PlayerAction = InputPlayerNameAction;

export function inputPlayerName(name: string): InputPlayerNameAction {
  return {
    type: INPUT_PLAYER_NAME,
    payload: name
  };
}
