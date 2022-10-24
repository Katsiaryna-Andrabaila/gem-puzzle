import {getBox} from './getBox.js';
import {startNewGame} from './startNewGame.js';
import {turnOffSound} from './turnOffSound.js';
import {changeSize} from './changeSize.js';
import {setLocalStorage} from './setLocalStorage.js';
import {getLocalStorage} from './getLocalStorage.js';

function startGame() {
    const container = document.body.appendChild(document.createElement('div'));

    const audio = document.body.appendChild(document.createElement('audio'));
    audio.src = 'assets/sound.mp3';

    const box = container.appendChild(document.createElement('div'));
    const params = container.appendChild(document.createElement('div'));

    container.classList.add('container');
    box.classList.add('box');
    params.classList.add('params');

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

    const timer = params.appendChild(document.createElement('div'));
    timer.classList.add('timer');
    timer.innerHTML = '0:00';

    const movesCounter = params.appendChild(document.createElement('div'));
    movesCounter.classList.add('moves-counter');
    movesCounter.innerHTML = 'Moves: 0';

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

    const saveAndLoad = params.appendChild(document.createElement('div'));
    saveAndLoad.classList.add('save-and-load-block');

    const saveBtn = saveAndLoad.appendChild(document.createElement('button'));
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save Game';
    saveBtn.addEventListener('click', setLocalStorage);

    const loadBtn = saveAndLoad.appendChild(document.createElement('button'));
    loadBtn.classList.add('load-btn');
    loadBtn.textContent = 'Load Saved';
    loadBtn.addEventListener('click', getLocalStorage);

    const changeAndSound = params.appendChild(document.createElement('div'));
    changeAndSound.classList.add('change-and-sound-block');
    
    const changeSizeBtn = changeAndSound.appendChild(document.createElement('button'));
    changeSizeBtn.classList.add('change-btn');
    changeSizeBtn.textContent = 'Change Size';

    const soundBtn = changeAndSound.appendChild(document.createElement('button'));
    soundBtn.classList.add('sound-btn');
    soundBtn.addEventListener('click', turnOffSound);

    const sizePopup = document.body.appendChild(document.createElement('div'));
    sizePopup.classList.add('size-popup');

    const game3 = sizePopup.appendChild(document.createElement('button'));
    game3.classList.add('size');
    game3.textContent = '3x3';
    const game4 = sizePopup.appendChild(document.createElement('button'));
    game4.classList.add('size');
    game4.textContent = '4x4';
    const game5 = sizePopup.appendChild(document.createElement('button'));
    game5.classList.add('size');
    game5.textContent = '5x5';
    const game6 = sizePopup.appendChild(document.createElement('button'));
    game6.classList.add('size');
    game6.textContent = '6x6';
    const game7 = sizePopup.appendChild(document.createElement('button'));
    game7.classList.add('size');
    game7.textContent = '7x7';
    const game8 = sizePopup.appendChild(document.createElement('button'));
    game8.classList.add('size');
    game8.textContent = '8x8';

    let sizes = document.querySelectorAll('.size');
    for (let i = 0; i < sizes.length; i++) {
        sizes[i].addEventListener('click', function(event) {
            sizePopup.classList.remove('open');
            shadow.classList.remove('active');
            changeSize(event);
        })
    }

    const shadow = document.body.appendChild(document.createElement('div'));
    shadow.classList.add('shadow');

    changeSizeBtn.addEventListener('click', function() {
        sizePopup.classList.add('open');
        shadow.classList.add('active');
    });

    shadow.addEventListener('click', (event) => {
        if (event.target.classList.contains('active')) {
            sizePopup.classList.remove('open');
            shadow.classList.remove('active');
        }
    });
}

startGame();

window.addEventListener('beforeunload', setLocalStorage);

window.addEventListener('load', getLocalStorage);

getBox(16);