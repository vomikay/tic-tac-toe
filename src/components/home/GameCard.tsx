import React from "react";
import useStyles from "./GameCard.styles";
import { State, Result } from "../../redux";

type Props = {
  owner: string;
  opponent: string;
  state: State;
  result: Result;
  onJoin: () => void;
};

const GameCard: React.FC<Props> = props => {
  const { owner, opponent, onJoin } = props;
  const classes = useStyles({ ...props });
  return (
    <button className={classes.root} type="button" onClick={onJoin}>
      <p className={classes.owner}>{owner}</p>
      <p className={classes.opponent}>{opponent}</p>
    </button>
  );
};

export default GameCard;
