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
var jsonData =
[
    {
        "question" : "일어나",
        "answer" : "큐셀아 안녕!?",
    },
    {
        "question" : "불꺼",
        "answer" : "나는 자러갈게..!!",
    },
    {
        "question" : "뭐먹어",
        "answer" : "복숭아를 먹지요~",
    },
    {
        "question" : "이름",
        "answer" : "내 이름은 어피치야~",
    },
    {
        "question" : "모각코",
        "answer" : "너 코딩하려는구나~? 잠시만 기다려!",
    }
]
let question = "";
let answer = "";
let learnNum = 0;
let value;
function check_text(){
    value = document.getElementById("text_input").value;
    for(let i=0; i<jsonData.length; i++){
        if(value.includes(jsonData[0].question)){
            if(lightControl==true){
                apeachsays.innerHTML = "나 이미 일어나 있잖아 !";
                lightControl = true;
                return;
            }
            else {
                body.style.backgroundColor = "white"
                apeachState.style.backgroundImage = "url('" + apeachUrl + "')";
                apeachsays.innerHTML = jsonData[0].answer;
                console.log(loginmsg);
                lightControl=true;
                return;
            }
        }
        else if(value.includes(jsonData[1].question)){
            if(lightControl==false){
                apeachsays.innerHTML = "이미 꺼져있잖아!";
                return;
                }
                else {
                        body.style.backgroundColor = "#fcecf2"
                        apeachState.style.backgroundImage = "url('" + apeachSleepUrl + "')";
                        apeachsays.innerHTML = jsonData[1].answer;
                        lightControl = false;
                        return;
                    }
                }
        else if(value.includes(jsonData[2].question)){
            apeachState.style.backgroundImage = "url('" + apeachEatUrl + "')";
            apeachsays.innerHTML = jsonData[2].answer;
            return;
        }
        else if(value.includes(jsonData[3].question)){
            apeachState.style.backgroundImage = "url('" + apeachIntroUrl + "')";
            apeachsays.innerHTML = jsonData[3].answer;
            return;
        }
        else if(value.includes(jsonData[4].question)){
            apeachState.style.backgroundImage = "url('" + apeachCodingUrl + "')";
            apeachsays.innerHTML = jsonData[4].answer;
            setTimeout(function(){
            window.open("https://cafe.naver.com/codeuniv", "코뮤니티 모각코", "width=800, height=700, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
            },2000);
            return;
        }
        else {  if(learnNum==0){
            question == value;
            apeachsays.innerHTML = negamsg;
            setTimeout(function(){
                apeachsays.innerHTML = "나한테 말을 알려줄거야?\n 응 or 아니 로 대답해줘!";
            },1500);
            learnNum = 1;
        }
        if(learnNum == 1) {
            if(value == "응") {
              apeachsays.innerText = "어떻게 대답할까?";
              learnStep = 2;
              return;
            }
            if(value == "아니") {
              apeachsays.innerText = "다음엔 무슨말인지 알려줘 !";
              learnNum = 0;
            }
          }
          if(learnNum == 2) {
            answer = value;
            jsonData.push({question: `${question}`,answer: `${answer}`});
            apeachsays.innerText = "어피치가 말을 배웠어 !";
            learnNum = 0;
          }
        }
    }
    if(value.includes("심심")){
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
}

    // if(value.includes("일어") || (value.includes("불") && value.includes("켜"))){
    //     if(lightControl==true){
    //         apeachsays.innerHTML ="나 이미 일어나 있잖아 !";
    //         lightControl = true;
    //     }
    //     else {    
    //         body.style.backgroundColor = "white"
    //         apeachState.style.backgroundImage = "url('" + apeachUrl + "')";
    //         change_text();
    //         console.log(loginmsg);
    //         lightControl=true;
    //     }
    // }
    // else if(value.includes("불") && value.includes("꺼")){
    //     if(lightControl==false){
    //         apeachsays.innerHTML = "이미 꺼져있잖아!";
    //     }
    //     else {
    //         body.style.backgroundColor = "#fcecf2"
    //         apeachState.style.backgroundImage = "url('" + apeachSleepUrl + "')";
    //         apeachsays.innerHTML = "나는 자러갈게..!";
    //         lightControl = false;
    //     }
    // }
    // else if(value.includes("먹어?")){
    //     apeachState.style.backgroundImage = "url('" + apeachEatUrl + "')";
    //     apeachsays.innerHTML = "복숭아를 먹지요~";
    // }
    // else if(value.includes("이름")){
    //     apeachState.style.backgroundImage = "url('" + apeachIntroUrl + "')";
    //     apeachsays.innerHTML = "내 이름은 어피치야!";
    // }
    // else if(value.includes("모각코") && value.includes("켜")){
    //     apeachState.style.backgroundImage = "url('" + apeachCodingUrl + "')";
    //     apeachsays.innerHTML = "너 코딩하려는구나 ~? 잠시만 기다려 !";
    //     setTimeout(function(){
    //         window.open("https://cafe.naver.com/codeuniv", "코뮤니티 모각코", "width=800, height=700, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
    //     },2000);
    // }
    // else if(value.includes("심심")){
    //     let randomValue = Math.floor(Math.random() * 3) + 1;
    //     if(randomValue == 1){
    //         apeachState.style.backgroundImage = "url('" + apeachCodingUrl + "')";
    //         apeachsays.innerHTML = "심심할 땐 유튜브지 ~";
    //         setTimeout(function(){
    //             window.open("https://www.youtube.com", "유튜브", "width=800, height=700, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
    //         },2000);
    //     }
    //     else if(randomValue == 2){
    //         apeachState.style.backgroundImage = "url('" + apeachSleepUrl + "')";
    //         apeachsays.innerHTML = "너가 심심하니까 나도 자러갈래...";
    //         body.style.backgroundColor = "#fcecf2"
    //         lightControl = false;
    //     }
    //     else {
    //         apeachState.style.backgroundImage = "url('" + apeachIntroUrl + "')";
    //         apeachsays.innerHTML = "공부해서 깃헙에 잔디나 심어 !";
    //         setTimeout(function(){
    //             window.open("https://github.com/", "깃허브", "width=800, height=700, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
    //         },2000);
    //     }
    // }
    // else {
    //     apeachsays.innerHTML = negamsg;
    //     console.log(negamsg);
    // }


function change_text(){
    apeachsays.innerHTML = loginmsg;
}