let secondsElapsed = 0;
let intervalId = null;
const timeDisplay = document.getElementById("time");

function updateTime() {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeDisplay.textContent = formattedTime;
}

function startClock() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            secondsElapsed++;
            updateTime();
        }, 1000);
    }
}

function stopClock() {
    clearInterval(intervalId);
    intervalId = null;
}

function resetClock() {
    stopClock();
    secondsElapsed = 0;
    updateTime();
}
