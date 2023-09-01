
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0; 
let isPaused = true;
let intervalId;
let hours = 0;
let minutes = 0;
let seconds = 0;

const timeDisplay = document.querySelector(".js-time-display");

const startBtn = document.querySelector(".js-start-btn")
.addEventListener("click", () => {
    if(isPaused) {
        isPaused = false;
        startTime = Date.now() - elapsedTime;
            intervalId = setInterval(updateTime, 1000);
        
        }
    });

const pauseBtn = document.querySelector(".js-pause-btn")
.addEventListener("click", () => {
    if(!isPaused) {
        isPaused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
    });
    
const resetBtn = document.querySelector(".js-reset-btn")
.addEventListener("click", () => {
    isPaused = true;
    clearInterval(intervalId);

    startTime = 0;
    elapsedTime = 0;
    currentTime = 0; 
    hours = 0;
    minutes = 0;
    seconds = 0;

    timeDisplay.textContent = "00:00:00";
    });

function updateTime() {
    elapsedTime = Date.now() - startTime;

    hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    seconds = Math.floor((elapsedTime / 1000) % 60);

    hours = zeroPadding(hours);
    minutes = zeroPadding(minutes);
    seconds = zeroPadding(seconds);

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    function zeroPadding(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}


