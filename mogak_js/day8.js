let pos = 0;
let msg = document.getElementById("insertText")
const str = "2021년 고생하셨어요♥";
const fromStr = Array.from(str);

function showState(){
    alert("메세지 출력이 완료되었습니다.\n\n다시 보기를 원하시면\n초기화 후 출력해주세요.");
}
function startStr(){
    if(fromStr[pos]!=null){
        msg.innerHTML += fromStr[pos];
        pos++;
    } else {
        showState();
    }
}

function clearStr(){
    pos = 0;
}
function resetStr(){
    msg.innerHTML='';
    clearStr();
}