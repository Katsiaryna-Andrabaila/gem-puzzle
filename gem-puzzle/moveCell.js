import {makeMatrix} from "./makeMatrix.js";
import {getDirection} from './getDirection.js';
import {reloadBox} from './reloadBox.js';
import { getNextStepMatrix } from "./getNextStepMatrix.js";

export function moveCell(event) {
    let cells = document.querySelectorAll('.cell3');
    let mixedNumbers = [];
    let targetCell;
    for (let j = 0; j < cells.length; j++) {
        mixedNumbers.push(cells[j].textContent);
        if (cells[j].textContent === event.target.textContent) {
            targetCell = cells[j];
        }
    }

    let targetCellValue = event.target.textContent;

    const matrix = makeMatrix(mixedNumbers);

    let direction = getDirection(matrix, targetCellValue);

    if (direction) {
        targetCell.classList.add(direction);
    }

    getNextStepMatrix(matrix, targetCellValue);



}