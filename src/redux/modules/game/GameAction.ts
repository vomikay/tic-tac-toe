import {
  CreateAction,
  DoStepAction,
  CompleteAction,
  UpdateTimerAction,
  RemoveAction
} from "./gameActions";

type GameAction =
  | CreateAction
  | DoStepAction
  | CompleteAction
  | UpdateTimerAction
  | RemoveAction;
export default GameAction;
