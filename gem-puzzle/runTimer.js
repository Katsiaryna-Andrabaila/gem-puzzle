let seconds = 0;
let minutes = 0;
let hours = 0;

export function runTimer() {
    setInterval(getTime, 1000);

    function getTime() {
        let timer = document.querySelector('.timer');
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
}