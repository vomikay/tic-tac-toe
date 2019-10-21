import React from "react";
import { IGame, IState, GameState } from "../../../redux";
import { connect } from "react-redux";
import { GridList, GridListTile, Typography } from "@material-ui/core";
import { push } from "connected-react-router";
import GameCard from "../../../components/home/GameCard/GameCard";
import useStyles from "./GameList.styles";

type Props = {
  games: GameState;
  onJoin: (id: number) => void;
};

const GameList: React.FC<Props> = ({ games, onJoin }) => {
  const classes = useStyles();
  const gamesMap = Object.entries(games);
  return gamesMap.length !== 0 ? (
    <GridList cols={4} cellHeight="auto">
      {gamesMap.map(([id, game]: [string, IGame]) => {
        const cardProps = { ...game, onJoin };
        return (
          <GridListTile key={id}>
            <GameCard {...cardProps} />
          </GridListTile>
        );
      })}
    </GridList>
  ) : (
    <div className={classes.empty}>
      <div className={classes.emptyIcon}></div>
      <Typography variant="h6">No game</Typography>
    </div>
  );
};

export default connect(
  ({ games }: IState) => ({ games }),
  { onJoin: (id: number) => push(`game/${id}`) }
)(GameList);
