import React from "react";
import "./GameCard.css";
import GameInfo from "../models/gameInfo";

type Props = {
  game: GameInfo;
};

const GameCard: React.FC<Props> = ({ game }) => {
  return (
    <div className="game-card">
      <p className="game-card__player-name">{game.owner}</p>
      <p className="game-card__time">00:05:32</p>
    </div>
  );
};

export default GameCard;
