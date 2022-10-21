export function getDirection(matrix, targetCellValue) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] === targetCellValue) {
                if (matrix[i][j - 1] === '0') return 'left-move';
                if (matrix[i][j + 1] === '0') return 'right-move';
                if (matrix[i + 1]) {
                    if (matrix[i + 1][j] === '0') return 'down-move';
                }
                if (matrix[i - 1]) {
                    if (matrix[i - 1][j] === '0') return 'up-move';
                }
            }
        }
    }

    return null;
}