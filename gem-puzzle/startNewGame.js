import {makeNumbersArr} from './makeNumbersArr.js';
import { mixNumbers } from './mixNumbers.js';
import {clearCells} from './clearCells.js';
import {runTimer} from './runTimer.js';
import { moveCell } from './moveCell.js';
import {dragCell} from './dragCell.js';

export function startNewGame() {
    let movesCounter = document.querySelector('.moves-counter');
    movesCounter.innerHTML = 'Moves: 0';

    let timer = document.querySelector('.timer');
    let key = timer.dataset.v;
    clearInterval(key);
    timer.innerHTML = '0:00';
    key = setInterval(runTimer, 1000);
    timer.dataset.v = key;

    clearCells();

    const numbers = makeNumbersArr();

    const mixedNumbers = mixNumbers(numbers);

    let box = document.querySelector('.box');
    let cells;
    if (box.childNodes.length === 9) {
        cells = document.querySelectorAll('.cell3');
    } else if (box.childNodes.length === 16) {
        cells = document.querySelectorAll('.cell4');
    } else if (box.childNodes.length === 25) {
        cells = document.querySelectorAll('.cell5');
    } else if (box.childNodes.length === 36) {
        cells = document.querySelectorAll('.cell6');
    } else if (box.childNodes.length === 49) {
        cells = document.querySelectorAll('.cell7');
    } else if (box.childNodes.length === 64) {
        cells = document.querySelectorAll('.cell8');
    }

    let targetCell;
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', moveCell);
        //cells[i].addEventListener('mousedown', dragCell);
    }

    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = mixedNumbers[i];
        if (cells[i].textContent === '0') {
            cells[i].classList.add('hidden');
        } else {
            cells[i].classList.remove('hidden');
        }
    }
}