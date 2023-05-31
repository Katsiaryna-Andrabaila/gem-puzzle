export function getDraggable() {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] === targetCellValue) {
                if (matrix[i][j - 1] === '0') return true;
                if (matrix[i][j + 1] === '0') return true;
                if (matrix[i + 1]) {
                    if (matrix[i + 1][j] === '0') return true;
                }
                if (matrix[i - 1]) {
                    if (matrix[i - 1][j] === '0') return true;
                }
            }
        }
    }

    return null;
}