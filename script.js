let paused = false;
let cur_time = 0;
let timerInterval;

function startTimer(type) {
    var start_time;
    var chicken_pork_snake_shark = 65;
    var fish = 45;
    var trophy_fish = 95;
    var megalodon_kraken = 100



    if (type === 'Chicken' || type === 'Pork' || type === 'Snake' || type === 'Shark') {
        start_time = chicken_pork_snake_shark;
;
    } else if (type === 'Fish') {
        start_time = fish;
    } else if (type === 'Trophy_Fish') {
        start_time = trophy_fish;
    } else if (type == 'Megalodon' || type == 'Kraken') { // Megalodon and Kraken
        start_time = megalodon_kraken;
    }

    clearInterval(timerInterval); // Clear any existing timer
    cur_time = start_time;

    updateTimer(start_time, false);

    timerInterval = setInterval(function() {
        start_time--; // Decrement the timer
        updateTimer(start_time, false); // Pass the updated start_time to updateTimer
    }, 1000);
}


function updateTimer(startTime, stopped) {
    var minutes = Math.floor(startTime / 60);
    var seconds = startTime % 60;

    document.getElementById("Time").textContent = minutes + 'm' + ':' + seconds + 's';

    if (startTime === 0 && !stopped) {
        var audio = new Audio("Jelly_Fish_Jam.mp3");
        audio.play();
        clearInterval(timerInterval);
    }
}

function checkOngoing() {
    if (cur_time === 0) {
        return false;

    }
    return true;

}

function pauseTimer(cur_time) {
    var paused = false;
    if (paused === false){
        clearInterval(timerInterval);
        paused = true;

    } else{
        paused = false;
        timerInterval = setInterval(function() {
            cur_time--; // Decrement the timer
            updateTimer(cur_time, false); // Pass the updated start_time to updateTimer
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval); // Stop the interval
    updateTimer(0, true); // Reset the timer display
}

function getSeconds(){
    // Get the text content of the timer display
    var timerText = document.getElementById("Time").textContent;

    // Split the text into minutes and seconds
    var parts = timerText.split(' ');
    var minutes = parseInt(parts[0]); // Extract minutes
    var seconds = parseInt(parts[1]); // Extract seconds

    // Calculate total seconds
    var totalSeconds = minutes * 60 + seconds;
    return totalSeconds;
}


var timerButtons = ['Chicken', 'Pork', 'Snake', 'Fish', 'Trophy_Fish', 'Shark', 'Megalodon', 'Kraken'];

for (let i = 0; i < timerButtons.length; i++) {
    document.getElementById(timerButtons[i]).addEventListener('click', () => {
        startTimer(timerButtons[i]);
    });
}

document.getElementById('Pause').addEventListener('click', function() {
    pauseTimer(getSeconds());
});

document.getElementById('Stop').addEventListener('click', function() {
    stopTimer();
});