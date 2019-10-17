import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./Button.styles";

const Back: React.FC = () => {
  const classes = useStyles();
  return (
    <Button className={classes.root} variant="contained">
      Back
    </Button>
  );
};

export default Back;
