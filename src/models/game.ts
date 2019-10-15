type GameResult = "" | "owner" | "opponent" | "draw";
type GameState = "ready" | "playing" | "done";
type Field = string[];

interface Game {
  id: number;
  owner: string;
  opponent: string;
  size: number;
  duration: number;
  result: GameResult;
  state: GameState;
  field: Field;
}

export default Game;
