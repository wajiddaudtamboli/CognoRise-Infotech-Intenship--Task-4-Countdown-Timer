document.getElementById('startButton').addEventListener('click', function() {
    const targetDateInput = document.getElementById('targetDate').value;
    if (!targetDateInput) {
        alert("Please select a date and time.");
        return;
    }

    const targetDate = new Date(targetDateInput).getTime();

    const countdownDisplay = document.getElementById('countdown');
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(interval);
            countdownDisplay.innerHTML = "Countdown Finished!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
});