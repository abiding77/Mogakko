let cnt = 0;
function randomOperation(){
    let x = Math.floor((Math.random()*(10-1)+1));
    let y = Math.floor((Math.random()*(10-1)+1));
    let plus = x + "+" + y + "=" + (x+y);
    let minus = x + "-" + y + "=" + (x-y);
    let mul = x + "*" + y + "=" + (x*y);
    let divi = x + "/" + y + "=" + (x/y);
    document.getElementById('randomPlus').innerHTML=plus;
    document.getElementById('randomMinus').innerHTML=minus;
    document.getElementById('randomMul').innerHTML=mul;
    document.getElementById('randomDiv').innerHTML=divi;
    if(cnt>0){
        console.clear();
    }
    console.log(x + '+' + y +"=" + (x+y));
    console.log(x + '-' + y +"=" + (x-y));
    console.log(x + '*' + y +"=" + (x*y));
    console.log(x + '/' + y +"=" + (x/y));
    cnt++;
}