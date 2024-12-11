let gameseq=[];
let userseq=[];
let btns=["yellow","red","blue","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});
function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


// function levelup(){
//     level++;
//     h2.innerText=`level ${level}`;
//     let randomIdx=Math.floor(Math.random()*4);
//     let randomColor=btns[randomIdx];
    
//    let randombtn = document.querySelector(`.${randomColor}`);
//     console.log(`Selected Button: ${randombtn}`);
     
//     if (randombtn) {
//         gameseq.push(randomColor);
//         console.log(`Game Sequence: ${gameseq}`);
//         gameFlash(randombtn);
//     } else {
//         console.error(`No element found for color: ${randomColor}`);
//     }
   
// }
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*4);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);
}
function checkAns(idx){
    
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game over! your sccore was <b>${level}</b><br> press any key to start again try again!.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnpress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
 function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}