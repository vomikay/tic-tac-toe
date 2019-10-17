import React from "react";
import { IGame, IState } from "../../redux";
import { connect } from "react-redux";
import { GridList, GridListTile } from "@material-ui/core";
import GameCardContainer from "./GameCardContainer";

type Props = {
  games: IGame[];
};

const GameCardList: React.FC<Props> = ({ games }) => {
  const spacing = 5;
  return (
    <GridList cols={4} spacing={spacing} cellHeight="auto">
      {games.map((game, i) => (
        <GridListTile key={i} rows={spacing}>
          <GameCardContainer {...game} />
        </GridListTile>
      ))}
    </GridList>
  );
};

const mapStateToProps = ({ games }: IState) => ({ games });

export default connect(mapStateToProps)(GameCardList);
