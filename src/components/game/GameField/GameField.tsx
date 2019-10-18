import React from "react";
import { Field } from "../../../redux";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import GameCellContainer from "../../../containers/game/GameCellContainer";
import useStyles from "./GameField.styles";

type Props = {
  id: number;
  field: Field;
};

const GameField: React.FC<Props> = ({ id, field }) => {
  const classes = useStyles();
  return (
    <Table className={classes.root}>
      <TableBody>
        {field.map((row, i) => (
          <TableRow className={classes.row} key={i}>
            {row.map((value, j) => (
              <TableCell className={classes.cell} key={`${i}-${j}`}>
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
