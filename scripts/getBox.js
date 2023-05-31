export function getBox(number) {
    const box = document.querySelector('.box');
    for (let i = 0; i < number; i++) {
        if (number === 9) {
            box.appendChild(document.createElement('div')).classList.add('cell3');
        } else if (number === 16) {
            box.appendChild(document.createElement('div')).classList.add('cell4');
        } else if (number === 25) {
            box.appendChild(document.createElement('div')).classList.add('cell5');
        } else if (number === 36) {
            box.appendChild(document.createElement('div')).classList.add('cell6');
        } else if (number === 49) {
            box.appendChild(document.createElement('div')).classList.add('cell7');
        } else if (number === 64) {
            box.appendChild(document.createElement('div')).classList.add('cell8');
        }
    }
}