import { GameState } from "../store/types";
import { Reducer } from "redux";
import { GameAction, CREATE_GAME, JOIN_GAME } from "../actions/game";

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
          field: new Array(gameSize * gameSize).fill(""),
          turn: "owner"
        }
      ];
    }
    case JOIN_GAME: {
      const { userName, gameId } = action.payload;
      const index = +gameId - 1;
      return state
        .slice(0, index)
        .concat({ ...state[index], opponent: userName, state: "playing" })
        .concat(state.slice(index + 1, state.length));
    }
    default:
      return state;
  }
};
