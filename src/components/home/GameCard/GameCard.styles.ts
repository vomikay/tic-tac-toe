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
      position: "relative",
      height: 85,
      width: 85,
      padding: 4,
      border: "0 none",
      "&:hover": { cursor: "pointer" }
    },
    owner: {
      color: ({ state, result }) => getColor(state, result, "owner")
    },
    opponent: {
      color: ({ state, result }) => getColor(state, result, "opponent")
    },
    container: {
      height: 40,
      textAlign: "left",
      display: "flex"
    },
    separator: {
      border: "none",
      margin: 0,
      color: "#828282",
      height: 1,
      backgroundColor: "#828282"
    },
    name: {
      flex: 2
    },
    timer: {
      position: "absolute",
      right: 4,
      bottom: 2,
      fontSize: 10
    }
  };
});
