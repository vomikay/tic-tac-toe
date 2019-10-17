import React from "react";
import { FieldValue } from "../../redux";
import { Typography } from "@material-ui/core";
import useStyles from "./GameCell.styles";

type Props = {
  value: FieldValue;
  onClick: () => void;
};

const GameCell: React.FC<Props> = ({ value, onClick }) => {
  const classes = useStyles();
  return (
    <button className={classes.root} type="button" onClick={onClick}>
      <Typography variant="h6" component="span">
        {value}
      </Typography>
    </button>
  );
};

export default GameCell;
