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

// Event listeners for each button
document.getElementById('Chicken').addEventListener('click', function() {
    startTimer('Chicken');
});

document.getElementById('Pork').addEventListener('click', function() {
    startTimer('Pork');
});

document.getElementById('Snake').addEventListener('click', function() {
    startTimer('Snake');
});

document.getElementById('Fish').addEventListener('click', function() {
    startTimer('Fish');
});

document.getElementById('Trophy_Fish').addEventListener('click', function() {
    startTimer('Trophy_Fish');
});

document.getElementById('Shark').addEventListener('click', function() {
    startTimer('Shark');
});

document.getElementById('Megalodon').addEventListener('click', function() {
    startTimer('Megalodon');
});

document.getElementById('Kraken').addEventListener('click', function() {
    startTimer('Kraken');
});

document.getElementById('Pause').addEventListener('click', function() {
    pauseTimer(getSeconds());
});

document.getElementById('Stop').addEventListener('click', function() {
    stopTimer();
});