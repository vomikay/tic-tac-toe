import React from "react";
import "./GameCard.css";
import GameInfo from "../models/gameInfo";

type Props = {
  game: GameInfo;
};

const GameCard: React.FC<Props> = ({ game }) => {
  const isWinner = (playerName: string, game: GameInfo) => {
    return (
      (game.gameResult === "owner" || game.gameResult === "opponent") &&
      playerName === game[game.gameResult]
    );
  };

  const getCardTheme = (game: GameInfo) => {
    return game.state === "ready"
      ? "game-card_theme_gray"
      : "game-card_theme_light-gray";
  };

  const getPlayerNameTheme = (playerName: string, game: GameInfo) => {
    if (isWinner(playerName, game)) {
      return "game-card__player-name_theme_won";
    }
    if (game.gameResult === "draw") {
      return "game-card__player-name_theme_drew";
    }
    return "game-card__player-name_theme_default";
  };

  const renderPlayerName = (playerName: string, game: GameInfo) => {
    const classes = [
      "game-card__player-name",
      getPlayerNameTheme(playerName, game)
    ].join(" ");
    return (
      <div className={classes}>
        <p className="game-card__player-name-text">{playerName}</p>
        {isWinner(playerName, game) && (
          <p className="game-card__player-name-text">&#10004;</p>
        )}
      </div>
    );
  };

  const cardClasses = ["game-card", getCardTheme(game)].join(" ");

  return (
    <div className={cardClasses}>
      {renderPlayerName(game.owner, game)}
      {game.state !== "ready" && game.owner && (
        <>
          <hr className="game-card__separator" />
          {renderPlayerName(game.opponent, game)}
        </>
      )}
      <p className="game-card__time">00:05:32</p>
    </div>
  );
};

export default GameCard;
