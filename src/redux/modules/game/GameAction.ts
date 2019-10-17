import {
  CreateAction,
  JoinAction,
  DoStepAction,
  CompleteAction
} from "./gameActions";

type GameAction = CreateAction | JoinAction | DoStepAction | CompleteAction;
export default GameAction;
