// Create a digital seconds clock using SetInterval and Date object in JavaScript
// The Date object can be used to get the date, time, hours and seconds which can be updated using setInterval
// Try to keep the UI good looking 

let intervalId;
let isClockOn = false;

function display(){
    let now = new Date();

    let dateEL = document.getElementsByClassName("sp1")[0];
    let date = now.getDate();
    dateEL.value = date;
    
    let dayEl = document.getElementsByClassName("sp2")[0];
    let dayIndex = now.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    dayEl.value = days[dayIndex];

    let hourEl = document.getElementsByClassName("sp3")[0];
    let hour = now.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    hourEl.value = hour + " :";

    let minutesEL = document.getElementsByClassName("sp4")[0];
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    minutesEL.value = minutes + " :"; 

    let secondsEl = document.getElementsByClassName("sp5")[0];
    let seconds = now.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds; 
    secondsEl.value = seconds; 
}

function keySwitch(){
    let state = document.getElementById("switch").value;
    if(state === "off"){
        if(!isClockOn){
            intervalId = setInterval(display, 1000);
            isClockOn = true;
        }
        document.getElementById("switch").value = "on";
        document.getElementById("switch").textContent = "Stop";
    }
    else{
        if(isClockOn){
            clearInterval(intervalId);
            isClockOn = false;
        }
        document.getElementById("switch").value = "off";
        document.getElementById("switch").textContent = "Start";

        document.getElementsByClassName("sp1")[0].value = "00";
        document.getElementsByClassName("sp2")[0].value = "";
        document.getElementsByClassName("sp3")[0].value = "00";
        document.getElementsByClassName("sp4")[0].value = "00";
        document.getElementsByClassName("sp5")[0].value = "00";
    } 
}

// let intervalId;
// let isClockOn = false;

// const dateEl = document.getElementById("sp1");
// const dayEl = document.getElementById("sp2");
// const hourEl = document.getElementById("sp3");
// const minutesEl = document.getElementById("sp4");
// const secondsEl = document.getElementById("sp5");
// const switchEl = document.getElementById("switch");

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// function display() {
//     const now = new Date();

//     const date = now.getDate();
//     const dayIndex = now.getDay();
//     const hour = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');

//     dateEl.textContent = date;
//     dayEl.textContent = days[dayIndex];
//     hourEl.textContent = `${hour} :`;
//     minutesEl.textContent = `${minutes} :`;
//     secondsEl.textContent = seconds;
// }

// function resetDisplay() {
//     dateEl.textContent = "00";
//     dayEl.textContent = "";
//     hourEl.textContent = "00 :";
//     minutesEl.textContent = "00 :";
//     secondsEl.textContent = "00";
// }

// function keySwitch() {
//     if (switchEl.value === "off") {
//         if (!isClockOn) {
//             intervalId = setInterval(display, 1000);
//             isClockOn = true;
//         }
//         switchEl.value = "on";
//     } else {
//         if (isClockOn) {
//             clearInterval(intervalId);
//             isClockOn = false;
//         }
//         switchEl.value = "off";
//         resetDisplay();
//     }
// }
