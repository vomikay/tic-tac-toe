import React from "react";
import Layout from "../Layout/Layout";
import { RouteComponentProps } from "react-router";
import { ThunkDispatch } from "redux-thunk";
import {
  IState,
  GameAction,
  State,
  doStep,
  Field as GameField
} from "../../../redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import useStyles from "./Game.styles";
import TimerContainer from "../../common/TimerContainer/TimerContainer";
import Field from "../../../components/game/Field/Field";
import Action from "../../game/Action/Action";

type OwnProps = RouteComponentProps<{ id: string }>;
type Props = OwnProps & {
  state: State;
  field: GameField;
  onStep: (row: number, column: number) => void;
};

const mapStateToProps = ({ games }: IState, { match }: OwnProps) => {
  const { id } = match.params;
  const game = games[+id];
  const { state, field } = game;
  return { state, field };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, undefined, GameAction>,
  { match }: OwnProps
) => {
  const { id } = match.params;
  const gameId = +id;
  return bindActionCreators(
    { onStep: (row: number, column: number) => doStep(gameId, row, column) },
    dispatch
  );
};

const Game: React.FC<Props> = ({ match, state, field, onStep }) => {
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
        <Action id={gameId} state={state} />
      </div>
    </Layout>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
