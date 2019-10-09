interface GameInfo {
  gameToken: string;
  owner: string;
  opponent: string;
  size: number;
  gameDuration: number;
  gameResult: "" | "owner" | "opponent" | "draw";
  state: "ready" | "playing" | "done";
}

export default GameInfo;
