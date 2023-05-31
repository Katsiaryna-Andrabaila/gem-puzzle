export function setLocalStorage() {
    let movesCounter = document.querySelector('.moves-counter');
    let timer = document.querySelector('.timer');
    let box = document.querySelector('.box');
    let scoreList = document.querySelector('.score-list');

    localStorage.setItem('moves', movesCounter.innerHTML);
    localStorage.setItem('timer', timer.innerHTML);
    localStorage.setItem('numbers', box.innerHTML);
    localStorage.setItem('scoreList', scoreList.innerHTML);
}