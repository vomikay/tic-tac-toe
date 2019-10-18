import React from "react";
import { connect } from "react-redux";
import { State, IState, GameAction, surrender } from "../../../redux";
import { Button } from "@material-ui/core";
import useStyles from "./Action.styles";
import { ThunkDispatch } from "redux-thunk";
import { goBack, RouterAction } from "connected-react-router";
import { bindActionCreators } from "redux";

type Props = { state: State; onBack: () => void; onSurrender: () => void };
type OwnProps = { id: number; state: State };

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, undefined, GameAction | RouterAction>,
  { id }: OwnProps
) => {
  return bindActionCreators(
    { onBack: goBack, onSurrender: () => surrender(id) },
    dispatch
  );
};

const Action: React.FC<Props> = ({ state, onBack, onSurrender }) => {
  const classes = useStyles();
  return (
    <>
      {state === "done" && (
        <Button className={classes.root} onClick={onBack}>
          Back
        </Button>
      )}
      {state === "playing" && (
        <Button className={classes.root} onClick={onSurrender}>
          Surrender
        </Button>
      )}
    </>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Action);
