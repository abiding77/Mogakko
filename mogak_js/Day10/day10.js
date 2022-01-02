let n = document.getElementById("namePrint");
let phone = document.getElementById("numberPrint");
let load = document.getElementById("loadingPrint");
let call = document.getElementById("btnCall");
let disc = document.getElementById("btnClose");

function clickCall(){
    document.body.style.backgroundColor = "black";
    n.innerHTML = "큐셀";
    phone.innerHTML = "010-1234-5678"
    load.innerHTML = "연결 중...";
}

function clickDis(){
    document.body.style.backgroundColor = "white";
    n.innerHTML = "";
    phone.innerHTML = "";
    load.innerHTML = "";
}

call.addEventListener('click', function() {
    
    setTimeout(clickCall, 2000);
})

disc.addEventListener('click', function(){
    setTimeout(clickDis(),1000);
})