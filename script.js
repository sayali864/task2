let timer;
let isRunning = false;
let time = 0; 
let lapTimes = [];

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function updateTime() {
    time++;
    document.getElementById("time").textContent = formatTime(time);
}

function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${sec}`;
}

function reset() {
    clearInterval(timer);
    time = 0;
    lapTimes = [];
    document.getElementById("time").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("laps").innerHTML = '';
    isRunning = false;
}

function recordLap() {
    if (isRunning) {
        lapTimes.push(time);
        const lapItem = document.createElement('li');
        lapItem.textContent = formatTime(time);
        document.getElementById("laps").appendChild(lapItem);
    }
}
