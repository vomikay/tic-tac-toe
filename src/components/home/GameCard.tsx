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

const GameCard: React.FC<Props> = ({ owner, opponent, onJoin }) => {
  const classes = useStyles();
  return (
    <button className={classes.root} type="button" onClick={onJoin}>
      <p>{owner}</p>
      <p>{opponent}</p>
    </button>
  );
};

export default GameCard;
