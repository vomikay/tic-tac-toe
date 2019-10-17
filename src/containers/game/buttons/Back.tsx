import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./Button.styles";
import { goBack } from "connected-react-router";
import { connect } from "react-redux";

type Props = {
  onBack: () => void;
};

const Back: React.FC<Props> = ({ onBack }) => {
  const classes = useStyles();
  return (
    <Button className={classes.root} onClick={onBack} variant="contained">
      Back
    </Button>
  );
};

export default connect(
  null,
  { onBack: goBack }
)(Back);
