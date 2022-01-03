let apeachUrl = "./getupapeach.jpg";
let apeachState = document.getElementById("apeach");
let apeachsays = document.getElementById("cat_says");
let loginmsg = "큐셀님, 안녕하세요!";
let negamsg = "우...웅..?";
function check_text(){
    let value = document.getElementById("text_input").value;
    if(value=="일어나!"){
        apeachState.style.backgroundImage = "url('" + apeachUrl + "')";
        change_text();
        console.log(loginmsg);
    }
    else {
        apeachsays.innerHTML = negamsg;
        console.log(negamsg);
    }
}

function change_text(){
    apeachsays.innerHTML = loginmsg;
}