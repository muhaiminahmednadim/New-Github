const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")





const newYear ='1 Jan 2022';


function countdown() {
    const upcmngnewYear = new Date(newYear);
    const currDate = new Date();

    const totalSecond = (upcmngnewYear - currDate) / 1000;
    const days = Math.floor(totalSecond /3600 /24); 
    const hours = Math.floor(totalSecond / 3600 %24);
    const mins = Math.floor(totalSecond/ 60)%60;
    const seconds = Math.floor(totalSecond % 60) ;

    daysEl.innerHTML=(days);
    hoursEl.innerHTML=(hours);
    minsEl.innerHTML=formattime(mins);
    secondsEl.innerHTML=formattime(seconds);

}
function formattime(time) {
    return time < 10 ?(`0${time}`): time;
    
}
formattime()
countdown() 

setInterval(countdown, 1000)