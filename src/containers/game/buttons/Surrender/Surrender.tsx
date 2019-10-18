import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "../Button.styles";
import { IState, GameAction, surrender } from "../../../../redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";

type Props = {
  onSurrender: () => void;
};

const Surrender: React.FC<Props> = ({ onSurrender }) => {
  const classes = useStyles();
  return (
    <Button className={classes.root} onClick={onSurrender} variant="contained">
      Surrender
    </Button>
  );
};

type OwnProps = {
  gameId: number;
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, undefined, GameAction>,
  { gameId }: OwnProps
) => bindActionCreators({ onSurrender: () => surrender(gameId) }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Surrender);
