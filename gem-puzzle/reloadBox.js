export function reloadBox(matrix) {
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        newMatrix.push([]);
        for (let j = 0; j < matrix[i].length; j++) {
            newMatrix[i].push(matrix[i][j]);
        }
    }

    const cells = document.querySelectorAll('.cell3');

    let arr = newMatrix.flat();
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = arr[i];
        if (cells[i].textContent === '0') {
            cells[i].classList.add('hidden');
        } else {
            cells[i].classList.remove('hidden');
        }
    }
}