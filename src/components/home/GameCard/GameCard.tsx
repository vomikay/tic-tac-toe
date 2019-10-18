import React from "react";
import useStyles from "./GameCard.styles";
import { State, Result } from "../../../redux";
import Timer from "../../common/Timer/Timer";

type Props = {
  id: number;
  owner: string;
  opponent: string;
  state: State;
  result: Result;
  duration: number;
  onJoin: (id: number) => void;
};

const GameCard: React.FC<Props> = props => {
  const classes = useStyles({ ...props });
  const { id, owner, opponent, duration, onJoin } = props;
  const onClick = () => onJoin(id);
  return (
    <button className={classes.root} type="button" onClick={onClick}>
      <p className={classes.owner}>{owner}</p>
      <p className={classes.opponent}>{opponent}</p>
      <Timer milliseconds={duration} variant="caption" />
    </button>
  );
};

export default GameCard;
