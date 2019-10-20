import React from "react";
import useStyles from "./GameCard.styles";
import { State, Result } from "../../../redux";
import TimerContainer from "../../../containers/common/TimerContainer/TimerContainer";
import { Typography } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

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
  const { id, owner, opponent, result, onJoin } = props;
  const onClick = () => onJoin(id);
  return (
    <button className={classes.root} type="button" onClick={onClick}>
      <div className={[classes.container, classes.owner].join(" ")}>
        <Typography className={classes.name} variant="body2">
          {owner}
        </Typography>
        {result === "owner" && <DoneIcon fontSize="small" />}
      </div>
      <hr className={classes.separator} />
      <div className={[classes.container, classes.opponent].join(" ")}>
        <Typography className={classes.name} variant="body2">
          {opponent}
        </Typography>
        {result === "opponent" && <DoneIcon fontSize="small" />}
      </div>
      <TimerContainer className={classes.timer} gameid={id} variant="caption" />
    </button>
  );
};

export default GameCard;
