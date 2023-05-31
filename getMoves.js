export function getMoves() {
    let movesCounter = document.querySelector('.moves-counter');
    let moves = movesCounter.innerHTML.slice(7);
    moves++;
    
    movesCounter.innerHTML = `Moves: ${moves}`;
}