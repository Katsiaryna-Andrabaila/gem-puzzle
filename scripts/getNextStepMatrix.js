export function getNextStepMatrix(matrix, targetCellValue) {
    let newMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        newMatrix.push([]);
        for (let j = 0; j < matrix[i].length; j++) {
            newMatrix[i].push(matrix[i][j]);
        }
    }

    for (let i = 0; i < newMatrix.length; i++) {
        for (let j = 0; j < newMatrix[i].length; j++) {
            if (newMatrix[i][j] == targetCellValue) {

                if (newMatrix[i][j - 1] == '0') {
                    let temp = newMatrix[i][j];
                    newMatrix[i][j] = '0';
                    newMatrix[i][j - 1] = temp;
                    return newMatrix;
                }
                if (newMatrix[i][j + 1] == '0') {
                    let temp = newMatrix[i][j];
                    newMatrix[i][j] = '0';
                    newMatrix[i][j + 1] = temp;
                    return newMatrix;
                }
                if (newMatrix[i + 1]) {
                    if (newMatrix[i + 1][j] == '0') {
                        let temp = newMatrix[i][j];
                        newMatrix[i][j] = '0';
                        newMatrix[i + 1][j] = temp;
                        return newMatrix;
                    }
                }
                if (newMatrix[i - 1]) {
                    if (newMatrix[i - 1][j] == '0') {
                        let temp = newMatrix[i][j];
                        newMatrix[i][j] = '0';
                        newMatrix[i - 1][j] = temp;
                        return newMatrix;
                    }
                }
            }
        }
    }

    return newMatrix;
}