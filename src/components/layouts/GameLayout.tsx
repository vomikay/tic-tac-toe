import React from "react";
import Layout from "./Layout";
import { Game } from "../../models/game";
import GameField from "../game/GameField";
import { Container, Typography } from "@material-ui/core";

type Props = {
  game: Game;
  isWinner: boolean;
  isLooser: boolean;
  draw: boolean;
};

const GameLayout: React.FC<Props> = ({ game, isWinner, isLooser, draw }) => {
  const { id, field, size } = game;
  return (
    <Layout>
      <GameField gameId={id} field={field} size={size} />
      <Container>
        <Typography variant="caption" style={{ textAlign: "center" }}>
          {isWinner && "Вы выиграли!"}
          {isLooser && "Вы проиграли!"}
          {draw && "Ничья"}
        </Typography>
      </Container>
    </Layout>
  );
};

export default GameLayout;
