import React from "react";
import { GameFieldValue } from "../../models/game";
import "./GameSquare.css";

type Props = {
  value: GameFieldValue;
  onClick: () => void;
};

const GameSquare: React.FC<Props> = ({ value, onClick }) => {
  return (
    <button className="game-square" type="button" onClick={onClick}>
      {value}
    </button>
  );
};

export default GameSquare;
