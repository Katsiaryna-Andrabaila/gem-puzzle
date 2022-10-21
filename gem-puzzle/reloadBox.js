export function reloadBox(matrix, targetCellValue) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log()
            if (matrix[i][j] === targetCellValue) {
                if (matrix[i][j - 1] === '0') {
                    [matrix[i][j], matrix[i][j - 1]] = [matrix[i][j - 1], matrix[i][j]];
                }
                if (matrix[i][j + 1] === '0') {
                    [matrix[i][j], matrix[i][j + 1]] = [matrix[i][j + 1], matrix[i][j]];
                }
                if (matrix[i + 1]) {
                    if (matrix[i + 1][j] === '0') {
                        [matrix[i + 1][j], matrix[i][j]] = [matrix[i][j], matrix[i + 1][j]];
                    }
                }
                if (matrix[i - 1]) {
                    if (matrix[i - 1][j] === '0') {
                        [matrix[i - 1][j], matrix[i][j]] = [matrix[i][j], matrix[i - 1][j]];
                    }
                }
            }
        }
    }
    console.log(matrix);
    return matrix;
}