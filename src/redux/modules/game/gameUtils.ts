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
  field: Field
): Result => {
  for (const [a, b, c] of WIN_LINES) {
    if (
      field[a.rowIndex][a.colIndex] &&
      field[a.rowIndex][a.colIndex] === field[b.rowIndex][b.colIndex] &&
      field[b.rowIndex][b.colIndex] === field[c.rowIndex][c.colIndex]
    ) {
      const value = field[a.rowIndex][a.colIndex];
      return value === "X" ? xRole : oRole;
    }
  }
  const isFull = field.every(row => row.every(cell => cell !== ""));
  return isFull ? "draw" : "";
};
