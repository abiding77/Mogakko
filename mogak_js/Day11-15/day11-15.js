let apeachUrl = "./getupapeach.jpg";
let apeachSleepUrl = "./sleepapeach.JPG";
let apeachEatUrl = "./eatapeach.jfif";
let apeachIntroUrl = "./introapeach.jfif";
let apeachCodingUrl = "./codingapeach.png";
let apeachState = document.getElementById("apeach");
let apeachsays = document.getElementById("cat_says");
let body = document.getElementById("context");
let loginmsg = "큐셀님, 안녕하세요!";
let negamsg = "우...웅..? 무슨말이야..?";

function check_text(){
    let value = document.getElementById("text_input").value;
    if(value=="일어나!"){
        body.style.backgroundColor = "white"
        apeachState.style.backgroundImage = "url('" + apeachUrl + "')";
        change_text();
        console.log(loginmsg);
    }
    else if(value=="불꺼줘!"){
        body.style.backgroundColor = "#fcecf2"
        apeachState.style.backgroundImage = "url('" + apeachSleepUrl + "')";
        apeachsays.innerHTML = "나는 자러갈게..!";
    }
    else if(value=="뭐 먹어?"){
        apeachState.style.backgroundImage = "url('" + apeachEatUrl + "')";
        apeachsays.innerHTML = "복숭아를 먹지요~";
    }
    else if(value=="이름이 뭐야?"){
        apeachState.style.backgroundImage = "url('" + apeachIntroUrl + "')";
        apeachsays.innerHTML = "내 이름은 어피치야!";
    }
    else if(value=="모각코 켜줘!"){
        apeachState.style.backgroundImage = "url('" + apeachCodingUrl + "')";
        apeachsays.innerHTML = "너 코딩하려는구나 ~? 잠시만 기다려 !";
        setTimeout(function(){
            window.open("https://cafe.naver.com/codeuniv", "코뮤니티 모각코", "width=800, height=700, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
        },2000);
    }
    else {
        apeachsays.innerHTML = negamsg;
        console.log(negamsg);
    }
}

function change_text(){
    apeachsays.innerHTML = loginmsg;
}
