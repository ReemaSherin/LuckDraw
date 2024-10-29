let counter = 0;
let intervalId = null;
let isRunning = false;

const countDisplay = document.getElementById('countDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const restartButton = document.getElementById('restartButton');

startButton.addEventListener('click', startCounting);
stopButton.addEventListener('click', stopCounting);
restartButton.addEventListener('click', restartCounting);

function startCounting() {
    if (isRunning) return; // Prevent starting multiple intervals
    isRunning = true;
    counter = 0;
    startButton.disabled = true;
    stopButton.disabled = false;
    restartButton.disabled = true;

    intervalId = setInterval(() => {
        if (counter < 3500) {
            counter++;
            countDisplay.textContent = `Count: ${counter}`;
        } else {
            clearInterval(intervalId);
            isRunning = false;
            alert("Reached 3500, restarting...");
            startCounting();
        }
    }, 10); // Adjust speed here if necessary
}

function stopCounting() {
    if (!isRunning) return;
    clearInterval(intervalId);
    isRunning = false;
    stopButton.disabled = true;
    startButton.disabled = false;
    restartButton.disabled = false;
}

function restartCounting() {
    counter = 0;
    countDisplay.textContent = "Count: 0";
    startButton.disabled = false;
    restartButton.disabled = true;
}
