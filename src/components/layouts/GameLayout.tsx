import React from "react";
import MainLayout from "./MainLayout";
import Game from "../../models/game";

type Props = {
  game: Game;
};

const GameLayout: React.FC<Props> = ({ game }) => {
  return <MainLayout>Game</MainLayout>;
};

export default GameLayout;
