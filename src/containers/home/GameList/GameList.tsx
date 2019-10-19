import React from "react";
import { IGame, IState, GameState } from "../../../redux";
import { connect } from "react-redux";
import { GridList, GridListTile } from "@material-ui/core";
import { push } from "connected-react-router";
import GameCard from "../../../components/home/GameCard/GameCard";

type Props = {
  games: GameState;
  onJoin: (id: number) => void;
};

const GameList: React.FC<Props> = ({ games, onJoin }) => {
  const spacing = 5;
  return (
    <GridList cols={4} spacing={spacing} cellHeight="auto">
      {Object.entries(games).map(([id, game]: [string, IGame]) => {
        const cardProps = { ...game, onJoin };
        return (
          <GridListTile key={id} rows={spacing}>
            <GameCard {...cardProps} />
          </GridListTile>
        );
      })}
    </GridList>
  );
};

export default connect(
  ({ games }: IState) => ({ games }),
  { onJoin: (id: number) => push(`game/${id}`) }
)(GameList);
