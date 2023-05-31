export function getSound() {
    const audio = document.querySelector('audio');
    const soundBtn = document.querySelector('.sound-btn');
    if (!soundBtn.classList.contains('sound-off')) {
        audio.play();
    }
}