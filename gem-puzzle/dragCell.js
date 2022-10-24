import {makeMatrix} from "./makeMatrix.js";
import {getDirection} from './getDirection.js';
import {reloadBox} from './reloadBox.js';
import { getNextStepMatrix } from "./getNextStepMatrix.js";
import { clearCells } from "./clearCells.js";
import {getCongratulations} from './getCongratulations.js';

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

    console.log(zeroCell);
    
    /*let currentX = event.clientX - targetCell.getBoundingClientRect().left;
    let currentY = event.clientY - targetCell.getBoundingClientRect().top;

    targetCell.style.position = 'absolute';
    targetCell.style.zIndex = 1000;
    box.append(targetCell); */

    let targetCellValue = event.target.textContent;

    const matrix = makeMatrix(mixedNumbers);
    
    const direction = getDirection(matrix, targetCellValue);

    if (direction) {
        moveCell(direction);
    }

    zeroCell.classList.add('droppable');

    function moveCell(direction) {
        targetCell.classList.add(direction);
    }

    let currentDroppable = null;

    function onMouseMove(event) {
        moveCell(direction);

        targetCell.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        targetCell.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');

        if (currentDroppable !== droppableBelow) {
            if (currentDroppable) {
                leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {
                enterDroppable(currentDroppable);
            }
        }
    }

    box.addEventListener('mousemove', onMouseMove);

    targetCell.addEventListener('mouseup', pushCell);

    function pushCell() {
        box.removeEventListener('mousemove', onMouseMove);
        targetCell.onmouseup = null;
    }

    targetCell.addEventListener('dragstart', function() {
        return false;
    })

    setTimeout((function() {
        const newMatrix = getNextStepMatrix(matrix, targetCellValue);

        clearCells();
        
        reloadBox(newMatrix);

        getCongratulations(newMatrix);
    }), 100)
}