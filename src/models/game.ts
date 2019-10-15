export type GameResult = "" | "owner" | "opponent" | "draw";
export type GameState = "ready" | "playing" | "done";
export type GameFieldValue = "" | "X" | "O";
export type GameField = GameFieldValue[];
export type GameTurn = "owner" | "opponent";

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
