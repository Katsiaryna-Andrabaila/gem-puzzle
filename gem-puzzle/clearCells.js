export function clearCells() {
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

    box.classList.remove('win');

    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('win');
        cells[i].classList.remove('hidden');
        cells[i].classList.remove('left-move');
        cells[i].classList.remove('right-move');
        cells[i].classList.remove('up-move');
        cells[i].classList.remove('down-move');
        cells[i].textContent = '';
    }
}