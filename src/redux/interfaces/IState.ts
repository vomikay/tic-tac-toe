import IGameState from "./IGameState";
import { RouterState } from "connected-react-router";

export default interface IState {
  userName: string;
  games: IGameState;
  router: RouterState;
}
