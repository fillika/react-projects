import { MouseEvent } from 'react';

export type TWinCombinations = number[];
export type TCells = ICells[];
export interface ICells {
  id: number;
}

export const winCombinations: TWinCombinations[] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const cells: TCells[] = [
  [{ id: 0 }, { id: 1 }, { id: 2 }],
  [{ id: 3 }, { id: 4 }, { id: 5 }],
  [{ id: 6 }, { id: 7 }, { id: 8 }],
];

export function startGame() {
  const cells = document.querySelectorAll('.cell');
  // Спрятать предупреждение о конце игры
  cells.forEach(cell => {
    cell.classList.remove('selected');
  });
}

export function click(event: MouseEvent<HTMLTableDataCellElement>) {
  console.log(event.target);
}
