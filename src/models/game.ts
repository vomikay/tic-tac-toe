export type GameRole = "owner" | "opponent";
export type GameResult = "" | "draw" | GameRole;
export type GameState = "ready" | "playing" | "done";
export type GameFieldValue = "" | "X" | "O";
export type GameField = GameFieldValue[][];
export type GameTurn = GameRole;

export interface Game {
  id: number;
  owner: string;
  opponent: string;
  size: number;
  duration: number;
  result: GameResult;
  state: GameState;
  field: GameField;
  turn: GameTurn;
}
