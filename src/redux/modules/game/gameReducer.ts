import { Reducer } from "redux";
import GameAction from "./GameAction";
import { CREATE, DO_STEP, COMPLETE, UPDATE_TIMER, REMOVE } from "./gameActions";
import IGameState from "../../interfaces/IGameState";
import { FieldValue } from "../../interfaces/IGame";

const initialState: IGameState = {};

const gameReducer: Reducer<IGameState, GameAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CREATE: {
      const { userName, gameSize } = action.payload;
      const emptyRow = new Array(gameSize).fill("");
      const emptyField = new Array(gameSize).fill(emptyRow);
      const id = Object.entries(state).length + 1;
      return {
        ...state,
        [id]: {
          id,
          owner: userName,
          opponent: "Bot",
          size: gameSize,
          duration: 0,
          result: "",
          state: "playing",
          nextTurn: "owner",
          field: emptyField
        }
      };
    }
    case DO_STEP: {
      const { gameId, row, column } = action.payload;
      const game = state[gameId];
      const { field, nextTurn } = game;
      const turn = nextTurn === "owner" ? "opponent" : "owner";

      const columnIndex = column - 1;
      const rowIndex = row - 1;

      const newRow: FieldValue[] = [
        ...field[rowIndex].slice(0, columnIndex),
        nextTurn === "owner" ? "X" : "O",
        ...field[rowIndex].slice(columnIndex + 1)
      ];

      const newField = [
        ...field.slice(0, rowIndex),
        newRow,
        ...field.slice(rowIndex + 1)
      ];

      return {
        ...state,
        [gameId]: { ...game, field: newField, nextTurn: turn }
      };
    }
    case COMPLETE: {
      const { gameId, gameResult } = action.payload;
      return {
        ...state,
        [gameId]: { ...state[gameId], state: "done", result: gameResult }
      };
    }
    case UPDATE_TIMER: {
      const { gameId, newDuration } = action.payload;
      return {
        ...state,
        [gameId]: { ...state[gameId], duration: newDuration }
      };
    }
    case REMOVE: {
      const { gameId } = action.payload;
      const { [gameId]: removed, ...rest } = state;
      return rest;
    }
    default:
      return state;
  }
};

export default gameReducer;
