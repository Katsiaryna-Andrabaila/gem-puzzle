import {moveCell} from "./moveCell.js";
import { runTimer } from "./runTimer.js";

export function getLocalStorage() {
    let movesCounter = document.querySelector('.moves-counter');
    let timer = document.querySelector('.timer');
    let box = document.querySelector('.box');
    
    /*let numbers = [];
    for (let i = 0; i < cells.length; i++) {
        numbers.push(cells[i].textContent);
    } */

    if (localStorage.getItem('moves')) {
        movesCounter.innerHTML = localStorage.getItem('moves');
    }
    if (localStorage.getItem('timer')) {
        timer.innerHTML = localStorage.getItem('timer');
        let key = timer.dataset.v;
        clearInterval(key);
        key = setInterval(runTimer, 1000);
        timer.dataset.v = key;
    }
    if (localStorage.getItem('numbers')) {
        box.innerHTML = localStorage.getItem('numbers');
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
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', moveCell);
        }
        
    }

    
}