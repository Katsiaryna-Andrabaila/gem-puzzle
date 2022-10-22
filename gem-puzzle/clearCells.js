export function clearCells() {
    let cells = document.querySelectorAll('.cell3');
    let box = document.querySelector('.box');
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
    
    /* cells.forEach(el => el.classList.remove('hidden'));

    cells.forEach(el => el.textContent = ''); */
}