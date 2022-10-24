export function saveResults(arr, timerStr, movesStr) {
    const scoreList = document.querySelector('.score-list');
    const boxSize = `${Math.sqrt(Number(arr.length))}x${Math.sqrt(Number(arr.length))}`;
    const savingStr = `${boxSize}, time: ${timerStr}, moves: ${movesStr}`;
    const scoreItem = document.createElement('li');
    scoreItem.innerHTML = savingStr;
    scoreItem.dataset.moves = movesStr;

    if (scoreList.childNodes.length === 0) {
        scoreList.append(scoreItem);
        return;
    }
    if (scoreList.childNodes.length < 10) {
        for (let i = 0; i < scoreList.childNodes.length; i++) {
            if (Number(movesStr) <= Number(scoreList.childNodes[i].dataset.moves)) {
                scoreList.childNodes[i].before(scoreItem);
                return;
            }
        }
        scoreList.append(scoreItem);
        return;
    }
    for (let i = 0; i < scoreList.childNodes.length; i++) {
        if (Number(movesStr) <= Number(scoreList.childNodes[i].dataset.moves)) {
            scoreList.childNodes[i].before(scoreItem);
            scoreList.lastChild.remove();
            return;
        }
    }
}