import { GameField } from "../models/game";

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
export const calculateWinner = (
  xUserName: string,
  oUserName: string,
  gameField: GameField
) => {
  for (const [a, b, c] of WIN_LINES) {
    if (
      gameField[a.rowIndex][a.colIndex] &&
      gameField[a.rowIndex][a.colIndex] === gameField[b.rowIndex][b.colIndex] &&
      gameField[b.rowIndex][b.colIndex] === gameField[c.rowIndex][c.colIndex]
    ) {
      return gameField[a.rowIndex][a.colIndex] === "X" ? xUserName : oUserName;
    }
  }
  return null;
};
