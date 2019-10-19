import IGameState from "./IGameState";

export default interface IState {
  userName: string;
  games: IGameState;
}
