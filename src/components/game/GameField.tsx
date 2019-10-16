import React from "react";
import { GameField as Field } from "../../models/game";
import { GridList, GridListTile } from "@material-ui/core";
import GameSquareContainer from "../../containers/game/GameSquareContainer";

type Props = {
  gameId: number;
  field: Field;
  size: number;
};

const GameField: React.FC<Props> = ({ gameId, field, size }) => {
  return (
    <GridList cols={size} spacing={0}>
      {field.map((value, i) => (
        <GridListTile key={i} style={{ height: "auto" }}>
          <GameSquareContainer
            gameId={gameId}
            value={value}
            row={Math.floor(i / size) + 1}
            column={(i % size) + 1}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default GameField;
