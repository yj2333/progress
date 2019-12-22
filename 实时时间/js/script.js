var bg = document.querySelector('.clock');
for (var i = 0; i < 360; i += 6) {
    if (i % 5 == 0) {
        bg.innerHTML += '<i style="transform: rotate(' + i + 'deg)" class = "big"></i>';
    }
    else {
        bg.innerHTML += '<i style="transform: rotate(' + i + 'deg)" class = "small"></i>';
    };
};
var Hour_minuteNode = document.querySelector(".timer_1");
var secondNode = document.querySelector('.timer_2');
var weekNode = document.querySelector('.timer_3');
var dateNode = document.querySelector('.timer_4');
var second = document.querySelector('.second');
var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
function clock() {
    var myDate = new Date();
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var seconds = myDate.getSeconds();
    var years = myDate.getFullYear();
    var months = myDate.getMonth();
    var days = myDate.getDate();
    var weeks = myDate.getDay();
    if (minutes <= 9 && minutes >= 0) {
        minutes = '0' + minutes;
    }
    Hour_minuteNode.innerHTML = hours + ':' + minutes;
    if (seconds <= 9 && seconds >= 0) {
        seconds = '0' + seconds;
    }
    secondNode.innerHTML = seconds;
    // week = week == 0 ? 7 : week;
    // switch (week) {
    //     case 1: week = '一'; break;
    //     case 2: week = '二'; break;
    //     case 3: week = '三'; break;
    //     case 4: week = '四'; break;
    //     case 5: week = '五'; break;
    //     case 6: week = '六'; break;
    //     default: week = '日'; break;
    // }
    // weekNode.innerHTML = '星期' + week;
    var weekcn = '日一二三四五六';
    weekNode.innerHTML = '星期' + weekcn.charAt(weeks);
    months = months + 1;
    dateNode.innerHTML = years + '年' + months + '月' + days + '日';
    second.style.transform = "rotate(" + (360 / 60 * seconds) + "deg)";
    minute.style.transform = "rotate(" + (360 / 60 / 60 * seconds + (360 / 60 * minutes)) + "deg)";
    hour.style.transform = "rotate(" + (360 / 60 / 15 * minutes + (360 / 12 * hours)) + "deg)";
}
clock();
setInterval(clock, 1000);