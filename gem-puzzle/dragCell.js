import {makeMatrix} from "./makeMatrix.js";
import {getDirection} from './getDirection.js';
import {reloadBox} from './reloadBox.js';
import { getNextStepMatrix } from "./getNextStepMatrix.js";
import { clearCells } from "./clearCells.js";
import {getCongratulations} from './getCongratulations.js';
import { moveCell } from "./moveCell.js";

export function dragCell(event) {
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

    let mixedNumbers = [];
    let zeroCell;
    let targetCell;
    for (let j = 0; j < cells.length; j++) {
        mixedNumbers.push(cells[j].textContent);
        if (cells[j].classList.contains('hidden')) zeroCell = cells[j];
        if (cells[j].textContent === event.target.textContent) targetCell = cells[j];
    }

    targetCell.addEventListener('mousemove', moveDragCell);
    targetCell.addEventListener('mouseup', removeAllListeners);
    targetCell.addEventListener('mouseleave', removeListeners);

    let startX = event.clientX;
    let startY = event.clientY;
    let targetCellValue = event.target.textContent;

    const matrix = makeMatrix(mixedNumbers);
    const direction = getDirection(matrix, targetCellValue);

    function moveDragCell(event) {
        
        //targetCell.style.transition = 'all 0s';
        
        let currentX = event.clientX;
        let currentY = event.clientY;
        let distance;
        if (direction === 'left-move') {
            distance = startX - currentX;

            if (distance > event.target.clientHeight) {
                distance = event.target.clientHeight + 4;
            }

            if (distance > 3) targetCell.style.transform = `translateX(-${distance}px)`;
        }
        if (direction === 'right-move') {
            distance = currentX - startX;
            if (distance > event.target.clientHeight) {
                distance = event.target.clientHeight + 4;
            }
            if (distance > 3) targetCell.style.transform = `translateX(${distance}px)`;
        }
        if (direction === 'down-move') {
            distance = currentY - startY;
            if (distance > event.target.clientHeight) {
                distance = event.target.clientHeight + 4;
            }
            if (distance > 3) targetCell.style.transform = `translateY(${distance}px)`;
        }
        if (direction === 'up-move') {
            distance = startY - currentY;
            if (distance > event.target.clientHeight) {
                distance = event.target.clientHeight + 4;
            }
            if (distance > 3) targetCell.style.transform = `translateY(-${distance}px)`;
        }

        //targetCell.style.transition = 'all 0.3s';
    }

    function removeListeners() {
        targetCell.removeEventListener('mousemove', moveDragCell);
        targetCell.removeEventListener('mouseup', removeAllListeners);
        targetCell.removeEventListener('mouseleave', removeListeners);
        moveCell(event);
    }

    function removeAllListeners() {
        targetCell.removeEventListener('mousemove', moveDragCell);
        targetCell.removeEventListener('mouseleave', removeListeners);
        targetCell.removeEventListener('mouseup', removeAllListeners);
        moveCell(event);
    }
}