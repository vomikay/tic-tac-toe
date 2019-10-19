import { makeStyles } from "@material-ui/core";
import { State, Result, Role } from "../../../redux";

type Props = {
  state: State;
  result: Result;
};

const backgrounds = {
  playing: "#bdbdbd",
  done: "#e0e0e0"
};

const colors = {
  default: "#fff",
  draw: "#4169e1",
  winner: "#f0ac47",
  loser: "#828282"
};

export default makeStyles<undefined, Props>(() => {
  const getColor = (state: State, result: Result, role: Role) => {
    if (state === "done" && result === "draw") {
      return colors.draw;
    }
    if (state === "done" && result === role) {
      return colors.winner;
    }
    if (state === "done" && result !== role) {
      return colors.loser;
    }
    return colors.default;
  };

  return {
    root: {
      backgroundColor: ({ state }) => backgrounds[state],
      height: 85,
      width: 85,
      border: "0 none",
      "&:hover": { cursor: "pointer" }
    },
    owner: {
      color: ({ state, result }) => getColor(state, result, "owner")
    },
    opponent: {
      color: ({ state, result }) => getColor(state, result, "opponent")
    }
  };
});
