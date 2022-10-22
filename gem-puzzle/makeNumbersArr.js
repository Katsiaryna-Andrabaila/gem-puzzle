export function makeNumbersArr() {
    let cells = document.querySelectorAll('.cell3');
    let min = 0;
    let max;

    if (cells.length === 9) {
        max = 8;
    }

    let arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}