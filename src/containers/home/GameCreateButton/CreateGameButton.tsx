import React from "react";
import { connect } from "react-redux";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { ThunkDispatch } from "redux-thunk";
import { IState, GameAction, create } from "../../../redux";
import { bindActionCreators } from "redux";
import useStyles from "./CreateGameButton.styles";

type Props = {
  onCreate: (size?: number) => void;
};

const CreateGameButton: React.FC<Props> = ({ onCreate }) => {
  const classes = useStyles();
  const onClick = () => onCreate();
  return (
    <Fab className={classes.root} onClick={onClick}>
      <Add fontSize="large" />
    </Fab>
  );
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, undefined, GameAction>
) => bindActionCreators({ onCreate: create }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(CreateGameButton);
