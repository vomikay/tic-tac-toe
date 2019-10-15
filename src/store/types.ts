import { Game } from "../models/game";

export interface UserState {
  name: string;
}

export type GameState = Game[];
