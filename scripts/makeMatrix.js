export function makeMatrix(arr) {
    let matrixSize = Math.sqrt(arr.length);
    
    const matrix = [];

    let j = 0;
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([]);
        for (j = j; j < matrixSize + matrixSize * i; j++) {
            matrix[i].push(arr[j]);
        }
    }

    return matrix;
}