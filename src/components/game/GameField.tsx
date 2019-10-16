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
      {field.map((row, i) =>
        row.map((value, j) => {
          return (
            <GridListTile key={`${i}${j}`} style={{ height: "auto" }}>
              <GameSquareContainer
                gameId={gameId}
                value={value}
                row={i + 1}
                column={j + 1}
              />
            </GridListTile>
          );
        })
      )}
    </GridList>
  );
};

export default GameField;
