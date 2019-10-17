import IGame from "./IGame";

export default interface IState {
  userName: string;
  games: IGame[];
}
