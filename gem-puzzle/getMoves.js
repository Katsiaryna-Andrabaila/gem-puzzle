let moves = 0;

export function getMoves() {
    moves++;
    let movesCounter = document.querySelector('.moves-counter');
    movesCounter.innerHTML = `Moves: ${moves}`;
}