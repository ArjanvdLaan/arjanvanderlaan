
function show() {
    document.getElementById('synopsis')
    .style.display = "block";
}

function show1() {
    document.getElementById('synopsis1')
    .style.display = "block";

}

function show2() {
    document.getElementById('synopsis2')
    .style.display = "block";
}

const countdown = () => {
    const countDate = new Date('September 2, 2022 00:00:00').getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

    //time itself
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24

    // calculate
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

};

setInterval(countdown, 1000);

