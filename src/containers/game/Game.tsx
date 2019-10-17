import React from "react";
import Layout from "../../components/layout/Layout";
import { RouteComponentProps } from "react-router";
import { IState, IGame } from "../../redux";
import { connect } from "react-redux";
import GameField from "../../components/game/GameField";
import Timer from "../../components/game/Timer";
import useStyles from "./Game.styles";

type Props = {
  game: IGame;
};

const Game: React.FC<Props> = ({ game }) => {
  const classes = useStyles();
  const { duration } = game;
  return (
    <Layout>
      <GameField {...game} />
      <div className={classes.timeContainer}>
        <Timer className={classes.time} variant="h5" milliseconds={duration} />
      </div>
    </Layout>
  );
};

type OwnProps = RouteComponentProps<{ id: string }>;

const mapStateToProps = (state: IState, { match }: OwnProps) => {
  const { games } = state;
  const game = games.find(game => game.id === +match.params.id);
  if (!game) {
    throw new Error("Incorrect game id");
  }
  return { game };
};

export default connect(mapStateToProps)(Game);
