import {
  CreateAction,
  DoStepAction,
  CompleteAction,
  UpdateTimerAction
} from "./gameActions";

type GameAction =
  | CreateAction
  | DoStepAction
  | CompleteAction
  | UpdateTimerAction;
export default GameAction;
