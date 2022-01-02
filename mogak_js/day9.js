let text1 = document.getElementById("ttl");
let text2 = document.getElementById("ttl2");
let text3 = document.getElementById("ttl3");

function firstBtn(){
    text1.innerHTML = "신세계"
    text2.innerHTML = " <img src='movie1.jpg' width=300px; height=300px> ";
    text3.innerHTML = "👉2012년 개봉<br>👉범죄 장르";
}

function secondBtn(){
    text1.innerHTML = "바람"
    text2.innerHTML = " <img src='movie2.jpg' width=300px; height=300px> ";
    text3.innerHTML = "👉2009년 개봉<br>👉드라마 장르";
}

function thirdBtn(){
    text1.innerHTML = "킹스맨"
    text2.innerHTML = " <img src='movie3.jpg' width=300px; height=300px> ";
    text3.innerHTML = "👉2021년 개봉<br>👉액션 장르";
}