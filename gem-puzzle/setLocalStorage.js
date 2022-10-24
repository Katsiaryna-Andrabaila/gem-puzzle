import { getBox } from "./getBox.js";

export function setLocalStorage() {
    let movesCounter = document.querySelector('.moves-counter');
    let timer = document.querySelector('.timer');
    let box = document.querySelector('.box');
    /* let cells;
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
    let numbers = [];
    for (let i = 0; i < cells.length; i++) {
        numbers.push(cells[i].textContent);
    }
    numbers.join(','); */



    localStorage.setItem('moves', movesCounter.innerHTML);
    localStorage.setItem('timer', timer.innerHTML);
    localStorage.setItem('numbers', box.innerHTML);
}