export function runTimer() {
        let timer = document.querySelector('.timer');
        let seconds = timer.textContent.slice(2);
        let minutes = timer.textContent[0];
        let hours = 0;
        seconds++;
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes >= 60) {
            hours++;
            minutes = 0;
        }
        if (hours < 1) {
            if (seconds < 10) {
                timer.innerHTML = `${minutes}:0${seconds}`;
            } else {
                timer.textContent = `${minutes}:${seconds}`;
            }
        } else {
            if (minutes < 10) {
                if (seconds < 10) {
                    timer.innerHTML = `${hours}:0${minutes}:0${seconds}`;
                } else {
                    timer.textContent = `${hours}:0${minutes}:${seconds}`;
                }
            } else {
                if (seconds < 10) {
                    timer.innerHTML = `${hours}:${minutes}:0${seconds}`;
                } else {
                    timer.textContent = `${hours}:${minutes}:${seconds}`;
                }
            }
        }
}