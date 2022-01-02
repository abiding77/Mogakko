const watch = document.getElementById("stopwatch");
let timerstate;
let time=0;
let hour;
let min;
let sec;
function printTime(){
    time++;
    watch.innerText=getTime();
}

function startWatch(){
    printTime();
    stopWatch();
    timerstate = setTimeout(startWatch,1000);
}

function stopWatch(){
    if(timerstate != null){
        clearTimeout(timerstate);
    }
}

function resetWatch(){
    stopWatch();
    watch.innerText="00:00:00";
    time = 0;
}

function getTime(){
    hour = parseInt(String(time / (60*60)));
    min = parseInt(String((time-(hour*60*60))/60));
    sec = time % 60;

    return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}