import React from "react";
import GameCard from "./GameCard";
import "./GameList.css";
import Game from "../models/game";

type Props = {
  games: Game[];
};

const GameList: React.FC<Props> = ({ games }) => {
  return (
    <ul className="game-list">
      {games.map(game => (
        <li className="game-list__item" key={game.token}>
          <GameCard game={game} />
        </li>
      ))}
    </ul>
  );
};

export default GameList;
