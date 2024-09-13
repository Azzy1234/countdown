document.getElementById("startBtn").addEventListener("click", function() {
    let minutes = parseInt(document.getElementById("minutes").value) || 0;
    let seconds = parseInt(document.getElementById("seconds").value) || 0;
    
    let totalTime = (minutes * 60) + seconds; // Total time in seconds

    if (totalTime <= 0) {
        alert("Please enter a valid time.");
        return;
    }

    let countdownInterval = setInterval(function() {
        if (totalTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").textContent = "00:00";
            alert("Time's up!");
        } else {
            totalTime--;
            let mins = Math.floor(totalTime / 60);
            let secs = totalTime % 60;

            // This wil update the display if theres any leading zeros
            document.getElementById("countdown").textContent = 
    (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
        }
    }, 1000);
});
