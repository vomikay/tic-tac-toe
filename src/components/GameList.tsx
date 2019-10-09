import React from "react";
import GameCard from "./GameCard";
import "./GameList.css";
import GameInfo from "../models/gameInfo";

type Props = {
  games: GameInfo[];
};

const GameList: React.FC<Props> = ({ games }) => {
  return (
    <ul className="game-list">
      {games.map(game => (
        <li className="game-list__item" key={game.gameToken}>
          <GameCard game={game} />
        </li>
      ))}
    </ul>
  );
};

export default GameList;
