import {clearCells} from './clearCells.js';

export function startNewGame() {
    clearCells();

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    function mixNumbers(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    let mixedNumbers = mixNumbers(numbers);

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