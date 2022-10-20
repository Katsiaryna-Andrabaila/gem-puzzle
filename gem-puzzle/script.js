/***************************************************** BASIC GAME 3 X 3 **********************************************************/

const container = document.body.appendChild(document.createElement('div'));
const params = document.body.appendChild(document.createElement('div'));
const box = container.appendChild(document.createElement('div'));
container.classList.add('container');
box.classList.add('box');
params.classList.add('params');

for (let i = 0; i < 8; i++) {
    box.appendChild(document.createElement('div')).classList.add('cell3');
}

const newGameBtn = params.appendChild(document.createElement('button'));
newGameBtn.classList.add('new-game_btn')
