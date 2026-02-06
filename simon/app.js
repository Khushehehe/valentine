let gameSeq=[];
let userSeq=[];

let buttons=["yellow","red","purple","green"];
let started=false;
let level=0;
let highestScore=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("Game started");

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
};

function levelUp(){
    userSeq=[];
    level++;
    if(level === 10){ // do it 11
    localStorage.setItem("chocolateGame", "won");
    h2.innerText = "🎉 Congratulations! You won 🍫";

    setTimeout(()=>{
        window.location.href = "../chocolate.html";
    }, 2000);

    return;
    }
    if(level>highestScore){
        highestScore=level;
    }
    h2.innerText=`Level ${level}`;
    let randInd=Math.floor(Math.random()*3);
    let randCol=buttons[randInd];
    let randBtn=document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn);
};

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Press any key to start <br>Your highest score was <b>${highestScore}<b/>`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },300);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}






