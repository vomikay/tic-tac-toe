import { Reducer } from "redux";
import GameAction from "./GameAction";
import IGame from "../../interfaces/IGame";
import {
  CREATE,
  DO_STEP,
  COMPLETE,
  UPDATE_TIMER,
  TIMER_DELAY_TIME
} from "./gameActions";

const initialState: IGame[] = [];

const gameReducer: Reducer<IGame[], GameAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CREATE: {
      const { userName, gameSize } = action.payload;
      const emptyRow = new Array(gameSize).fill("");
      const emptyField = new Array(gameSize).fill(emptyRow);
      return [
        ...state,
        {
          id: state.length + 1,
          owner: userName,
          opponent: "Bot",
          size: gameSize,
          duration: 0,
          result: "",
          state: "playing",
          nextTurn: "owner",
          field: emptyField
        }
      ];
    }
    case DO_STEP: {
      const { gameId, row, column } = action.payload;
      const gameIndex = gameId - 1;
      const game = state[gameIndex];
      const { field, nextTurn } = game;

      const columnIndex = column - 1;
      const rowIndex = row - 1;

      const newRow = field[rowIndex]
        .slice(0, columnIndex)
        .concat(nextTurn === "owner" ? "X" : "O")
        .concat(field[rowIndex].slice(columnIndex + 1));

      const newField = field
        .slice(0, rowIndex)
        .concat([newRow])
        .concat(field.slice(rowIndex + 1));

      return state
        .slice(0, gameIndex)
        .concat({
          ...game,
          field: newField,
          nextTurn: nextTurn === "owner" ? "opponent" : "owner"
        })
        .concat(state.slice(gameIndex + 1));
    }
    case COMPLETE: {
      const { gameId, gameResult } = action.payload;
      const index = gameId - 1;
      return state
        .slice(0, index)
        .concat({ ...state[index], state: "done", result: gameResult })
        .concat(state.slice(index + 1));
    }
    case UPDATE_TIMER: {
      const { gameId } = action.payload;
      const index = gameId - 1;
      const game = state[index];
      const { duration } = game;
      return state
        .slice(0, index)
        .concat({
          ...game,
          duration: duration + TIMER_DELAY_TIME
        })
        .concat(state.slice(index + 1));
    }
    default:
      return state;
  }
};

export default gameReducer;
