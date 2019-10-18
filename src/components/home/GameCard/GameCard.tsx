import React from "react";
import useStyles from "./GameCard.styles";
import { State, Result } from "../../../redux";
import Timer from "../../common/Timer/Timer";

type Props = {
  owner: string;
  opponent: string;
  state: State;
  result: Result;
  duration: number;
  onJoin: () => void;
};

const GameCard: React.FC<Props> = props => {
  const { owner, opponent, duration, onJoin } = props;
  const classes = useStyles({ ...props });
  return (
    <button className={classes.root} type="button" onClick={onJoin}>
      <p className={classes.owner}>{owner}</p>
      <p className={classes.opponent}>{opponent}</p>
      <Timer milliseconds={duration} variant="caption" />
    </button>
  );
};

export default GameCard;
