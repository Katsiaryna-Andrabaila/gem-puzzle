export function clearCells() {
    let cells = document.querySelectorAll('.cell3');

    cells.forEach(el => el.textContent = '');
}