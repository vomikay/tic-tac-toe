import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./Button.styles";

const Surrender: React.FC = () => {
  const classes = useStyles();
  return (
    <Button className={classes.root} variant="contained">
      Surrender
    </Button>
  );
};

export default Surrender;
