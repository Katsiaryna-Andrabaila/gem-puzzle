/***************************************************** BASIC GAME 3 X 3 **********************************************************/
import {startNewGame} from './startNewGame.js';
import {moveCell} from './moveCell.js';

function startGame() {
    const container = document.body.appendChild(document.createElement('div'));
    const box = container.appendChild(document.createElement('div'));
    const params = container.appendChild(document.createElement('div'));

    container.classList.add('container');
    box.classList.add('box');
    params.classList.add('params');

    for (let i = 0; i < 9; i++) {
        box.appendChild(document.createElement('div')).classList.add('cell3');
    }

    let cells = document.querySelectorAll('.cell3');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', moveCell);
    }

    const timer = params.appendChild(document.createElement('div'));
    timer.classList.add('timer');
    timer.innerHTML = '0:00';

    const movesCounter = params.appendChild(document.createElement('div'));
    movesCounter.classList.add('moves-counter');
    movesCounter.innerHTML = 'Moves: ';

    const newGameBtn = params.appendChild(document.createElement('button'));
    newGameBtn.classList.add('new_game-btn');
    newGameBtn.textContent = 'New Game';
    newGameBtn.addEventListener('click', startNewGame);

    const score = params.appendChild(document.createElement('div'));
    score.classList.add('score');

    const scoreHeader = score.appendChild(document.createElement('p'));
    scoreHeader.classList.add('score-header');
    scoreHeader.textContent = 'Score:';

    const scoreList = score.appendChild(document.createElement('ul'));
    scoreList.classList.add('score-list');

    const saveAndSound = params.appendChild(document.createElement('div'));
    saveAndSound.classList.add('save-and-sound-block');

    const saveBtn = saveAndSound.appendChild(document.createElement('button'));
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save The Game';

    const soundBtn = saveAndSound.appendChild(document.createElement('button'));
    soundBtn.classList.add('sound-btn');

    const changeBtn = params.appendChild(document.createElement('button'));
    changeBtn.classList.add('change-btn');
    changeBtn.textContent = 'Change Size';
}

startGame();

