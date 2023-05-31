import {getBox} from './getBox.js';

export function changeSize(event) {
    let box = document.querySelector('.box');
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }

    let sizes = document.querySelectorAll('.size');

    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i].textContent === event.target.textContent) {
            getBox(Number(sizes[i].textContent[0]) ** 2);
        }
    }
}