import React from "react";
import "./GameCard.css";
import GameInfo from "../models/gameInfo";

type Props = {
  game: GameInfo;
};

const CardTheme = {
  READY: "game-card_theme_ready",
  NOT_READY: "game-card_theme_not-ready"
};

const NameTheme = {
  DEFAULT: "game-card__name_theme_default",
  WON: "game-card__name_theme_won",
  DREW: "game-card__name_theme_drew"
};

const GameCard: React.FC<Props> = ({ game }) => {
  const isWinner = (userName: string, game: GameInfo) => {
    return (
      (game.gameResult === "owner" || game.gameResult === "opponent") &&
      userName === game[game.gameResult]
    );
  };

  const getCardTheme = (game: GameInfo) => {
    return game.state === "ready" ? CardTheme.READY : CardTheme.NOT_READY;
  };

  const getNameTheme = (userName: string, game: GameInfo) => {
    if (isWinner(userName, game)) {
      return NameTheme.WON;
    }
    if (game.gameResult === "draw") {
      return NameTheme.DREW;
    }
    return NameTheme.DEFAULT;
  };

  const renderName = (userName: string, game: GameInfo) => {
    return (
      <div className={`game-card__name ${getNameTheme(userName, game)}`}>
        <p className="game-card__name-text">{userName}</p>
        {isWinner(userName, game) && (
          <p className="game-card__name-text">&#10004;</p>
        )}
      </div>
    );
  };

  return (
    <div className={`game-card ${getCardTheme(game)}`}>
      {renderName(game.owner, game)}
      {game.state !== "ready" && game.owner && (
        <>
          <hr className="game-card__separator" />
          {renderName(game.opponent, game)}
        </>
      )}
      <p className="game-card__time">00:05:32</p>
    </div>
  );
};

export default GameCard;
