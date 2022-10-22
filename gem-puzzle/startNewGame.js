import {makeNumbersArr} from './makeNumbersArr.js';
import { mixNumbers } from './mixNumbers.js';
import {clearCells} from './clearCells.js';

export function startNewGame() {
    clearCells();

    const numbers = makeNumbersArr(0, 8);

    const mixedNumbers = mixNumbers(numbers);

    const cells = document.querySelectorAll('.cell3');

    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = mixedNumbers[i];
        if (cells[i].textContent === '0') {
            cells[i].classList.add('hidden');
        } else {
            cells[i].classList.remove('hidden');
        }
    }
}