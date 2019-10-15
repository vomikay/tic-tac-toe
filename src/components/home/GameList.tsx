import React from "react";
import Game from "../../models/game";
import { GridList, GridListTile } from "@material-ui/core";
import GameCardContainer from "../../containers/home/GameCardContainer";

type Props = {
  games: Game[];
};

const GameList: React.FC<Props> = ({ games }) => {
  return (
    <GridList className="game-list" cols={3}>
      {games.map(game => (
        <GridListTile
          className="game-list__item"
          key={game.token}
          style={{ height: "auto" }}
        >
          <GameCardContainer game={game} />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default GameList;
