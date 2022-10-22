export function reloadBox(matrix) {
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        newMatrix.push([]);
        for (let j = 0; j < matrix[i].length; j++) {
            newMatrix[i].push(matrix[i][j]);
        }
    }

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

    let arr = newMatrix.flat();
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = arr[i];
        if (cells[i].textContent === '0') {
            cells[i].classList.add('hidden');
        } else {
            cells[i].classList.remove('hidden');
        }
    }
}