import {makeNumbersArr} from './makeNumbersArr.js';
import { mixNumbers } from './mixNumbers.js';
import {clearCells} from './clearCells.js';
import {runTimer} from './runTimer.js';

export function startNewGame() {
    runTimer();
    clearCells();

    const numbers = makeNumbersArr();

    const mixedNumbers = mixNumbers(numbers);

    let cells = document.querySelectorAll('.cell3');

    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = mixedNumbers[i];
        if (cells[i].textContent === '0') {
            cells[i].classList.add('hidden');
        } else {
            cells[i].classList.remove('hidden');
        }
    }
}