window.setInterval(getMyTime,1000);  // in milliseconds
function getMyTime(){
    var date = new Date();
    document.getElementById('time').innerHTML=date.toLocaleString; // 10:33:11
}

var myTime = document.getElementById("time");
var myBtn = document.getElementById("myBtn");

myBtn.addEventListener('click',getMyTime);

