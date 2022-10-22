export function getCongratulations() {
    let box = document.querySelector('.box');
    let cells = document.querySelectorAll('.cell3');
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