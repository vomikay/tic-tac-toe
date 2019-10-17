import { Reducer } from "redux";
import IGamesState from "../../interfaces/IGamesState";
import GameAction from "./GameAction";
import IGame from "../../interfaces/IGame";
import {
  CREATE,
  JOIN,
  DO_STEP,
  COMPLETE,
  UPDATE_TIMER,
  TIMER_DELAY_TIME
} from "./gameActions";

const TIMER = 5 * 60 * 1000;

const initialState: IGame[] = [];

const gameReducer: Reducer<IGamesState, GameAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CREATE: {
      const { userName, gameSize } = action.payload;
      return [
        ...state,
        {
          id: state.length + 1,
          owner: userName,
          opponent: "",
          size: gameSize,
          duration: TIMER,
          result: "",
          state: "ready",
          nextTurn: "owner",
          field: new Array(gameSize).fill(new Array(gameSize).fill(""))
        }
      ];
    }
    case JOIN: {
      const { userName, gameId } = action.payload;
      const index = gameId - 1;
      return state
        .slice(0, index)
        .concat({ ...state[index], opponent: userName, state: "playing" })
        .concat(state.slice(index + 1));
    }
    case DO_STEP: {
      const { gameId, row, column } = action.payload;
      const gameIndex = gameId - 1;
      const game = state[gameIndex];
      const { field } = game;
      const rowIndex = row - 1;
      const columnIndex = column - 1;
      const newRow = field[rowIndex]
        .slice(0, columnIndex)
        .concat(game.nextTurn === "owner" ? "X" : "O")
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
          nextTurn: game.nextTurn === "owner" ? "opponent" : "owner"
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
      return state
        .slice(0, index)
        .concat({
          ...state[index],
          duration: state[index].duration - TIMER_DELAY_TIME
        })
        .concat(state.slice(index + 1));
    }
    default:
      return state;
  }
};

export default gameReducer;
