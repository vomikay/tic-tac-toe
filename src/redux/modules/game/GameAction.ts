import {
  CreateAction,
  JoinAction,
  DoStepAction,
  CompleteAction,
  UpdateTimerAction
} from "./gameActions";

type GameAction =
  | CreateAction
  | JoinAction
  | DoStepAction
  | CompleteAction
  | UpdateTimerAction;
export default GameAction;
