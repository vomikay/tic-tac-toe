import { Role, Field, Result } from "../../interfaces/IGame";

const WIN_LINES = [
  [
    { rowIndex: 0, colIndex: 0 },
    { rowIndex: 0, colIndex: 1 },
    { rowIndex: 0, colIndex: 2 }
  ],
  [
    { rowIndex: 1, colIndex: 0 },
    { rowIndex: 1, colIndex: 1 },
    { rowIndex: 1, colIndex: 2 }
  ],
  [
    { rowIndex: 2, colIndex: 0 },
    { rowIndex: 2, colIndex: 1 },
    { rowIndex: 2, colIndex: 2 }
  ],
  [
    { rowIndex: 0, colIndex: 0 },
    { rowIndex: 1, colIndex: 0 },
    { rowIndex: 2, colIndex: 0 }
  ],
  [
    { rowIndex: 0, colIndex: 1 },
    { rowIndex: 1, colIndex: 1 },
    { rowIndex: 2, colIndex: 1 }
  ],
  [
    { rowIndex: 0, colIndex: 2 },
    { rowIndex: 1, colIndex: 2 },
    { rowIndex: 2, colIndex: 2 }
  ],
  [
    { rowIndex: 0, colIndex: 0 },
    { rowIndex: 1, colIndex: 1 },
    { rowIndex: 2, colIndex: 2 }
  ],
  [
    { rowIndex: 2, colIndex: 0 },
    { rowIndex: 1, colIndex: 1 },
    { rowIndex: 0, colIndex: 2 }
  ]
];

// only for 3x3 field
export const calculateResult = (
  xRole: Role,
  oRole: Role,
  gameField: Field
): Result => {
  for (const [a, b, c] of WIN_LINES) {
    if (
      gameField[a.rowIndex][a.colIndex] &&
      gameField[a.rowIndex][a.colIndex] === gameField[b.rowIndex][b.colIndex] &&
      gameField[b.rowIndex][b.colIndex] === gameField[c.rowIndex][c.colIndex]
    ) {
      return gameField[a.rowIndex][a.colIndex] === "X" ? xRole : oRole;
    }
  }
  return gameField.every(row => row.every(cell => cell !== "")) ? "draw" : "";
};
