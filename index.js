let second = 00;
let tens = 00;

const append_seconds = document.getElementById("seconds");
const append_tens = document.getElementById("tens");
const start = document.getElementById("button-start");
const stop = document.getElementById("button-stop");
const reset = document.getElementById("button-reset");
var interval;
start.onclick = function () {
    interval = setInterval(startTimer, 100);
};

stop.onclick = function () {
    clearInterval(interval);
};

reset.onclick = function () {
    clearInterval(interval);
    second = "00";
    tens = "00";

    append_seconds.innerHTML = second;
    append_tens.innerHTML = tens;
};

function startTimer() {
    tens++;
    if (tens <= 9) {
        append_tens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        append_tens.innerHTML = tens;
    }
    if (tens > 99) {
        second++;
        append_seconds.innerHTML = "0" + second;
        tens = 0;
        append_tens.innerHTML = "0" + tens;
    }
    if (second > 9) {
        append_seconds.innerHTML = second;
    }
}
