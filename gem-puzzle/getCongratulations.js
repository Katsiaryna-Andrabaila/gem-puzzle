export function getCongratulations() {
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
    
    let message = '';
    let timer = document.querySelector('.timer');
    let moves = document.querySelector('.moves-counter');

    if (cells[cells.length - 1].textContent === '0') {
        for (let i = 0; i < cells.length - 1; i++) {
            //console.log(cells[i].textContent, cells[i + 1].textContent - 1);
            if (cells[i].textContent === cells[i + 1].textContent - 1) {
                cells[i].classList.add('win');
                box.classList.add('win');
                message = `Hooray! You solved the puzzle in ${timer.innerHTML} and ${moves.innerHTML(slice(7))} moves!`;
                alert(message);
            }
        }
    }
}