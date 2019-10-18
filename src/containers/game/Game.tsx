import React from "react";
import Layout from "../../components/layout/Layout/Layout";
import { RouteComponentProps } from "react-router";
import { IState, IGame } from "../../redux";
import { connect } from "react-redux";
import GameField from "../../components/game/GameField/GameField";
import Timer from "../../components/common/Timer/Timer";
import useStyles from "./Game.styles";
import Back from "./buttons/Back";
import Surrender from "./buttons/Surrender";

type Props = {
  game: IGame;
};

const Game: React.FC<Props> = ({ game }) => {
  const classes = useStyles();
  const { id, state, duration } = game;
  return (
    <Layout>
      <GameField {...game} />
      <div className={classes.container}>
        <Timer className={classes.time} milliseconds={duration} variant="h5" />
      </div>
      <div className={classes.container}>
        {state === "done" && <Back />}
        {state === "playing" && <Surrender gameId={id} />}
      </div>
    </Layout>
  );
};

type OwnProps = RouteComponentProps<{ id: string }>;

const mapStateToProps = (state: IState, { match }: OwnProps) => {
  const { games } = state;
  const game = games[+match.params.id - 1];
  return { game };
};

export default connect(mapStateToProps)(Game);
