import React from "react";
import { Field } from "../../redux";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import GameCellContainer from "../../containers/game/GameCellContainer";

type Props = {
  id: number;
  field: Field;
};

const GameField: React.FC<Props> = ({ id, field }) => {
  return (
    <Table>
      <TableBody>
        {field.map((row, i) => (
          <TableRow key={i}>
            {row.map((value, j) => (
              <TableCell key={`${i}-${j}`}>
                <GameCellContainer
                  id={id}
                  value={value}
                  row={i + 1}
                  column={j + 1}
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GameField;
