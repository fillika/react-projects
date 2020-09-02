import { MouseEvent } from 'react';

export type TWinCombinations = number[];
export type TCells = ICells[];
export interface ICells {
  id: number;
  selectedPerson: boolean;
  selectedII: boolean;
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
  [
    { id: 0, selectedPerson: false, selectedII: false },
    { id: 1, selectedPerson: false, selectedII: false },
    { id: 2, selectedPerson: false, selectedII: false },
  ],
  [
    { id: 3, selectedPerson: false, selectedII: false },
    { id: 4, selectedPerson: false, selectedII: false },
    { id: 5, selectedPerson: false, selectedII: false },
  ],
  [
    { id: 6, selectedPerson: false, selectedII: false },
    { id: 7, selectedPerson: false, selectedII: false },
    { id: 8, selectedPerson: false, selectedII: false },
  ],
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
