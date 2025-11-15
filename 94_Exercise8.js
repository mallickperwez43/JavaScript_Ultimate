// The HTML AudioElement Interface can be used to play audio in a browser
// Create an alarm clock which display time and plays sound at a user specified time

// Solution starts from below

let alarmTime = null;

// ---------------------------------------------
// Core Clock and Alarm Check Function
// ---------------------------------------------

const updateClockAndCheckAlarm = () => {
    const timeDisplay = document.getElementById('current-time');
    if (!timeDisplay) {
        return;
    }

    const timeNow = new Date();

    // toLocaleTimeString ensures dynamic HH:MM:SS and AM/PM based on system time
    const currentTimeString = timeNow.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    // Step 1 : Update the time display
    timeDisplay.textContent = currentTimeString;

    // Step 2 : Check for alarm
    if (alarmTime && currentTimeString === alarmTime) {
        triggerAlarm();
    }
};

// ---------------------------------------------
// Alarm Logic Functions
// ---------------------------------------------

const formatAlarmTime = (inputTime) => {
    const [h, m] = inputTime.split(':');
    const dummyDate = new Date();
    dummyDate.setHours(h, m, 0, 0);

    return dummyDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
};

const triggerAlarm = () => {
    const alarmAudio = document.getElementById('alarm-audio');
    const timeDisplay = document.getElementById('current-time');

    if (!alarmAudio || typeof alarmAudio.play !== 'function') {
        console.error("Audio element not ready. Cannot play alarm, Check HTML ID and file path.");
        if (timeDisplay) {
            alert("Alarm triggered! (Audio blocked or missing");
        }
        return;
    }

    alarmAudio.currentTime = 0; // reset the audio to start from begin
    const playPromise = alarmAudio.play();

    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log("Alarm sound playing.");
            })
            .catch(error => {
                console.error("Autoplay prevented.", error);
                alert("Alarm! Please click 'Stop Alarm' to acknowledge (Audio blocked by browser).");
            });
    }

    timeDisplay.classList.add('alarm-ringing');
};

const stopAlarm = () => {
    const alarmAudio = document.getElementById('alarm-audio');
    const timeDisplay = document.getElementById('current-time');
    const setAlarmBtn = document.getElementById('set-alarm-btn');
    const stopAlarmBtn = document.getElementById('stop-alarm-btn');

    alarmTime = null;

    if (alarmAudio && typeof alarmAudio.pause === 'function') {
        alarmAudio.pause();
    }

    if (timeDisplay) timeDisplay.classList.remove('alarm-ringing');
    if (setAlarmBtn) setAlarmBtn.disabled = false;
    if (stopAlarmBtn) stopAlarmBtn.disabled = true;
};

const setAlarm = () => {
    const alarmTimeInput = document.getElementById('alarm-time');
    const setAlarmBtn = document.getElementById('set-alarm-btn');
    const stopAlarmBtn = document.getElementById('stop-alarm-btn');

    if (!alarmTimeInput || !alarmTimeInput.value) {
        alert("Please select a time for the alarm.");
        return;
    }

    alarmTime = formatAlarmTime(alarmTimeInput.value);
    if (setAlarmBtn) setAlarmBtn.disabled = true;
    if (stopAlarmBtn) stopAlarmBtn.disabled = false;
    console.log(`Alarm set for Alarm Time : ${alarmTime}`);
};



// ---------------------------------------------
// Theme Toggle Functions
// ---------------------------------------------

const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');

    // save prefered theme in local storage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// ---------------------------------------------
// Execution : Wait for DOM Content to be Loaded
// ---------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const setAlarmBtn = document.getElementById('set-alarm-btn');
    const stopAlarmBtn = document.getElementById('stop-alarm-btn');
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Step 1 : Load preference theme
    loadTheme();

    // Step 2 : Core loop to update time at every interval of 1 second
    setInterval(updateClockAndCheckAlarm, 1000);

    // Step 3 : Attach event listeners
    if (setAlarmBtn) setAlarmBtn.addEventListener('click', setAlarm);
    if (stopAlarmBtn) stopAlarmBtn.addEventListener('click', stopAlarm);
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);

    // Step 4 : Initial clock update
    updateClockAndCheckAlarm();
});
