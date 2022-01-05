let apeachUrl = "./getupapeach.jpg";
let apeachSleepUrl = "./sleepapeach.JPG";
let apeachEatUrl = "./eatapeach.jfif";
let apeachIntroUrl = "./introapeach.jfif";
let apeachCodingUrl = "./codingapeach.png";
let apeachFollowUrl = "./followapeach.png";
let apeachState = document.getElementById("apeach");
let apeachsays = document.getElementById("cat_says");
let body = document.getElementById("context");
let loginmsg = "큐셀님, 안녕하세요!";
let negamsg = "우...웅..? 무슨말이야..?";
let lightControl;
let follow = 0;
function check_text(){
    let value = document.getElementById("text_input").value;
    if(value.includes("일어") || (value.includes("불") && value.includes("켜"))){
        if(lightControl==true){
            apeachsays.innerHTML ="나 이미 일어나 있잖아 !";
            lightControl = true;
        }
        else {    
            body.style.backgroundColor = "white"
            apeachState.style.backgroundImage = "url('" + apeachUrl + "')";
            change_text();
            console.log(loginmsg);
            lightControl=true;
        }
    }
    else if(value.includes("불") && value.includes("꺼")){
        if(lightControl==false){
            apeachsays.innerHTML = "이미 꺼져있잖아!";
        }
        else {
            body.style.backgroundColor = "#fcecf2"
            apeachState.style.backgroundImage = "url('" + apeachSleepUrl + "')";
            apeachsays.innerHTML = "나는 자러갈게..!";
            lightControl = false;
        }
    }
    else if(value.includes("먹어?")){
        apeachState.style.backgroundImage = "url('" + apeachEatUrl + "')";
        apeachsays.innerHTML = "복숭아를 먹지요~";
    }
    else if(value.includes("이름")){
        apeachState.style.backgroundImage = "url('" + apeachIntroUrl + "')";
        apeachsays.innerHTML = "내 이름은 어피치야!";
    }
    else if(value.includes("모각코") && value.includes("켜")){
        apeachState.style.backgroundImage = "url('" + apeachCodingUrl + "')";
        apeachsays.innerHTML = "너 코딩하려는구나 ~? 잠시만 기다려 !";
        setTimeout(function(){
            window.open("https://cafe.naver.com/codeuniv", "코뮤니티 모각코", "width=800, height=700, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
        },2000);
    }
    else if(value.includes("심심")){
        let randomValue = Math.floor(Math.random() * 3) + 1;
        if(randomValue == 1){
            apeachState.style.backgroundImage = "url('" + apeachCodingUrl + "')";
            apeachsays.innerHTML = "심심할 땐 유튜브지 ~";
            setTimeout(function(){
                window.open("https://www.youtube.com", "유튜브", "width=800, height=700, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
            },2000);
        }
        else if(randomValue == 2){
            apeachState.style.backgroundImage = "url('" + apeachSleepUrl + "')";
            apeachsays.innerHTML = "너가 심심하니까 나도 자러갈래...";
            body.style.backgroundColor = "#fcecf2"
            lightControl = false;
        }
        else {
            apeachState.style.backgroundImage = "url('" + apeachIntroUrl + "')";
            apeachsays.innerHTML = "공부해서 깃헙에 잔디나 심어 !";
            setTimeout(function(){
                window.open("https://github.com/", "깃허브", "width=800, height=700, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
            },2000);
        }
    }
    else {
        apeachsays.innerHTML = negamsg;
        console.log(negamsg);
    }
}

function change_text(){
    apeachsays.innerHTML = loginmsg;
}