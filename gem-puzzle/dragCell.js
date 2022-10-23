export function dragCell(event) {
    let box = document.querySelector('.box');

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
    
    let targetCell;
    for (let j = 0; j < cells.length; j++) {
        if (cells[j].textContent === event.target.textContent) {
            targetCell = cells[j];
        }
    }
    
    let startX = event.pageX;
    let startY = event.pageY;

    targetCell.addEventListener('mousemove', moveCell);

    function moveCell(event) {
        let currentX = event.pageX;
        let currentY = event.pageY;

        
    }

    console.log(startX, startY);
}