import React from "react";
import Layout from "../../components/layout/Layout";
import { RouteComponentProps } from "react-router";
import { IState, IGame } from "../../redux";
import { connect } from "react-redux";
import GameField from "../../components/game/GameField";

type Props = {
  game: IGame;
};

const Game: React.FC<Props> = ({ game }) => {
  return (
    <Layout>
      <GameField {...game} />
      <p>{game.duration}</p>
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
