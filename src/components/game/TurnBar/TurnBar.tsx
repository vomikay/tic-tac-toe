import React from "react";
import useStyles from "./TurnBar.styles";
import { Typography } from "@material-ui/core";

type Props = {
  owner: string;
  opponent: string;
};

const TurnBar: React.FC<Props> = ({ owner, opponent }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.name}>{owner}</Typography>
        <Typography className={classes.xTurn}>X</Typography>
      </div>
      <div>
        <Typography className={classes.oTurn}>O</Typography>
        <Typography className={classes.name}>{opponent}</Typography>
      </div>
    </div>
  );
};

export default TurnBar;
