import React from "react";
import Layout from "./Layout";
import { Game } from "../../models/game";
import GameField from "../game/GameField";

type Props = {
  game: Game;
};

const GameLayout: React.FC<Props> = ({ game }) => {
  const { id, field, size } = game;
  return (
    <Layout>
      <GameField gameId={id} field={field} size={size} />
    </Layout>
  );
};

export default GameLayout;
