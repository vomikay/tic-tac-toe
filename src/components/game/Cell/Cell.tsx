import React from "react";
import { FieldValue } from "../../../redux";
import { Typography } from "@material-ui/core";
import useStyles from "./Cell.styles";

type Props = {
  value: FieldValue;
  onClick: () => void;
};

const Cell: React.FC<Props> = ({ value, onClick }) => {
  const classes = useStyles({ value });
  return (
    <button className={classes.root} type="button" onClick={onClick}>
      <Typography variant="h2" component="span">
        {value}
      </Typography>
    </button>
  );
};

export default Cell;
