export function getCongratulations(newMatrix) {
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
    let numbers = newMatrix.flat();

    let sortedNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        sortedNumbers.push(numbers[i]);
    }

    sortedNumbers.sort((a, b) => a - b);
    sortedNumbers.shift();
    sortedNumbers.push('0');

    if (numbers.join('') === sortedNumbers.join('')) {
        for (let i = 0; i < cells.length - 1; i++) {
            cells[i].classList.remove('left-move');
            cells[i].classList.remove('right-move');
            cells[i].classList.remove('up-move');
            cells[i].classList.remove('down-move');
            cells[i].classList.add('win');
        }
        box.classList.add('win');
        message = `Hooray! You solved the puzzle in ${timer.innerHTML} and ${moves.innerHTML.slice(7)} moves!`;
        alert(message);
    }
}