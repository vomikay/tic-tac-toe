import React from "react";
import { Field as GameField } from "../../../redux";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import useStyles from "./Field.styles";
import Cell from "../Cell/Cell";

type Props = {
  field: GameField;
  onStep: (row: number, column: number) => void;
};

const Field: React.FC<Props> = ({ field, onStep }) => {
  const classes = useStyles();
  return (
    <Table className={classes.root}>
      <TableBody>
        {field.map((row, i) => (
          <TableRow className={classes.row} key={i}>
            {row.map((value, j) => {
              const onClick = () => onStep(i + 1, j + 1);
              return (
                <TableCell className={classes.cell} key={`${i}-${j}`}>
                  <Cell value={value} onClick={onClick} />
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Field;
