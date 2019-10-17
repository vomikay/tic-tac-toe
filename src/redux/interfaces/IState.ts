import IGamesState from "./IGamesState";
import IUserState from "./IUserState";

export default interface IState {
  user: IUserState;
  games: IGamesState;
}
