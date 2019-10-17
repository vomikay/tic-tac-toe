export type Role = "owner" | "opponent";
export type Result = "" | "draw" | Role;
export type State = "ready" | "playing" | "done";
export type FieldValue = "" | "X" | "O";
export type Field = FieldValue[][];

export default interface IGame {
  id: number;
  owner: string;
  opponent: string;
  size: number;
  duration: number;
  result: Result;
  state: State;
  field: Field;
  nextTurn: Role;
}
