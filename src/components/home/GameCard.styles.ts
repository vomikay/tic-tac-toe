import { makeStyles } from "@material-ui/styles";
import { State, Result, Role } from "../../redux";

type Props = {
  state: State;
  result: Result;
};

const backgrounds = {
  ready: "#828282",
  playing: "#bdbdbd",
  done: "#e0e0e0"
};

const colors = {
  draw: "#4395c7",
  winner: "#dfa776",
  loser: "#828282",
  default: "#fff"
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
      border: "0 none"
    },
    owner: {
      color: ({ state, result }) => getColor(state, result, "owner")
    },
    opponent: {
      color: ({ state, result }) => getColor(state, result, "opponent")
    }
  };
});
