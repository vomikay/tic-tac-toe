import { GameState } from "../store/types";
import { Reducer } from "redux";
import { GameAction, CREATE_GAME, JOIN_GAME, DO_STEP } from "../actions/game";

const initialState: GameState = [];

export const gameReducer: Reducer<GameState, GameAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CREATE_GAME: {
      const { userName, gameSize } = action.payload;
      return [
        ...state,
        {
          id: state.length + 1,
          owner: userName,
          opponent: "",
          size: gameSize,
          duration: 0,
          result: "",
          state: "ready",
          field: new Array(gameSize).fill(new Array(gameSize).fill("")),
          turn: "owner"
        }
      ];
    }
    case JOIN_GAME: {
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
        .concat(game.turn === "owner" ? "X" : "O")
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
          turn: game.turn === "owner" ? "opponent" : "owner"
        })
        .concat(state.slice(gameIndex + 1));
    }
    default:
      return state;
  }
};
