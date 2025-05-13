var startBtn = document.querySelector(".start");
var stopBtn = document.querySelector(".stop");
var resetBtn = document.querySelector(".reset");
var timer = document.querySelector(".timer");

let sec = 00;
let min = 00;
let hrs = 00;

let timerId = null;

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 1000);

});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timer.innerHTML = `00 : 00 : 00`;
    hrs = min = sec = 0;
});

function startTimer(){
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
        if(min == 60){
            hrs++;
            min = 0;
        }
    }

    let hrsString = hrs < 10 ? `0${hrs}` : hrs;
    let minString = min < 10 ? `0${min}` : min;
    let secString = sec < 10 ? `0${sec}` : sec;

    timer.innerHTML = `${hrsString} : ${minString} : ${secString}`;
}
