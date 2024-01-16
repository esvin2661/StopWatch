const h1 = document.querySelector('.stopwatch h1');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let time = 0;
let intervalId;

startBtn.addEventListener('click', () => {
    intervalId = setInterval(() => {
        time++;
        h1.textContent = formatTime(time);
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    time = 0;
    h1.textContent = formatTime(time);
});

function formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
