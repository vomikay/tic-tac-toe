import React from "react";
import useStyles from "./GameCard.styles";
import { State, Result } from "../../../redux";
import TimerContainer from "../../../containers/common/TimerContainer/TimerContainer";

type Props = {
  id: number;
  owner: string;
  opponent: string;
  state: State;
  result: Result;
  onJoin: (id: number) => void;
};

const GameCard: React.FC<Props> = props => {
  const classes = useStyles({ ...props });
  const { id, owner, opponent, onJoin } = props;
  const onClick = () => onJoin(id);
  return (
    <button className={classes.root} type="button" onClick={onClick}>
      <p className={classes.owner}>{owner}</p>
      <p className={classes.opponent}>{opponent}</p>
      <TimerContainer gameid={id} variant="caption" />
    </button>
  );
};

export default GameCard;
