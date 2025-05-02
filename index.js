$(document).ready(function(){
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function(){
        open();
    });
    btn_open.click(function(){
        open();
    });
    btn_reset.click(function(){
        close();
    });

    function open(){
        envelope.addClass("open")
            .removeClass("close");
    }
    function close(){
        envelope.addClass("close")
            .removeClass("open");
    }
})

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`June 19 2025 1:00:00`);

function updateCountdowntime(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    console.log(newYearTime)
    console.log(currentTime)

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;

    console.log(d, h, m, s)

    days.innerHTML = d;
    hours.innerHTML = h <10 ? '0' +h : h;
    minutes.innerHTML = m <10 ? '0' +m : m;
    seconds.innerHTML = s <10 ? '0' +s : s;

}

setInterval(updateCountdowntime, 1000);

