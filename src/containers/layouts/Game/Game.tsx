import React from "react";
import Layout from "../Layout/Layout";
import { RouteComponentProps } from "react-router";
import { ThunkDispatch } from "redux-thunk";
import {
  IState,
  GameAction,
  surrender,
  State,
  doStep,
  Field as GameField
} from "../../../redux";
import { bindActionCreators } from "redux";
import { goBack, RouterAction } from "connected-react-router";
import { connect } from "react-redux";
import useStyles from "./Game.styles";
import { Button } from "@material-ui/core";
import TimerContainer from "../../common/TimerContainer/TimerContainer";
import Field from "../../../components/game/Field/Field";

type OwnProps = RouteComponentProps<{ id: string }>;
type Props = OwnProps & {
  state: State;
  field: GameField;
  onBack: () => void;
  onSurrender: () => void;
  onStep: (row: number, column: number) => void;
};

const mapStateToProps = ({ games }: IState, { match }: OwnProps) => {
  const { id } = match.params;
  const game = games[+id - 1];
  const { state, field } = game;
  return { state, field };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, undefined, GameAction | RouterAction>,
  { match }: OwnProps
) => {
  const { id } = match.params;
  const gameId = +id;
  return bindActionCreators(
    {
      onBack: goBack,
      onSurrender: () => surrender(+id),
      onStep: (row: number, column: number) => doStep(gameId, row, column)
    },
    dispatch
  );
};

const Game: React.FC<Props> = ({
  match,
  state,
  field,
  onBack,
  onSurrender,
  onStep
}) => {
  const classes = useStyles();
  const { id } = match.params;
  const gameId = +id;
  return (
    <Layout>
      <Field field={field} onStep={onStep} />
      <div className={classes.container}>
        <TimerContainer className={classes.time} gameid={gameId} variant="h5" />
      </div>
      <div className={classes.container}>
        {state === "done" && (
          <Button className={classes.action} onClick={onBack}>
            Back
          </Button>
        )}
        {state === "playing" && (
          <Button className={classes.action} onClick={onSurrender}>
            Surrender
          </Button>
        )}
      </div>
    </Layout>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
