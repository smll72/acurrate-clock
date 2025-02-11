// Atualizar o relógio em tempo real
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dateString = now.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' });

    document.getElementById('current-time').textContent = timeString;
    document.getElementById('current-date').textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();

// Cronômetro
let stopwatchInterval;
let stopwatchTime = 0;

document.getElementById('start-stopwatch').addEventListener('click', () => {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            const hours = Math.floor(stopwatchTime / 3600);
            const minutes = Math.floor((stopwatchTime % 3600) / 60);
            const seconds = stopwatchTime % 60;
            document.getElementById('stopwatch').textContent = 
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    }
});

document.getElementById('stop-stopwatch').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
});

document.getElementById('reset-stopwatch').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchTime = 0;
    document.getElementById('stopwatch').textContent = '00:00:00';
});

// Timer
let timerInterval;
let timerTime = 0;

document.getElementById('start-timer').addEventListener('click', () => {
    const minutes = parseInt(document.getElementById('timer-minutes').value) || 0;
    const seconds = parseInt(document.getElementById('timer-seconds').value) || 0;
    timerTime = minutes * 60 + seconds;

    if (timerTime > 0 && !timerInterval) {
        timerInterval = setInterval(() => {
            if (timerTime <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                alert('Timer concluído!');
                document.getElementById('timer-display').textContent = '00:00';
            } else {
                timerTime--;
                const minutes = Math.floor(timerTime / 60);
                const seconds = timerTime % 60;
                document.getElementById('timer-display').textContent = 
                    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
        }, 1000);
    }
});

document.getElementById('reset-timer').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById('timer-minutes').value = '';
    document.getElementById('timer-seconds').value = '';
    document.getElementById('timer-display').textContent = '00:00';
});