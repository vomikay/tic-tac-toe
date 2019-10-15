import React from "react";
import Layout from "./Layout";
import { Game } from "../../models/game";

type Props = {
  game: Game;
};

const GameLayout: React.FC<Props> = ({ game }) => {
  return <Layout>Game</Layout>;
};

export default GameLayout;
