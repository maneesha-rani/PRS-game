let computerChoice={0:'res/RR.png',1:'res/RP.png',2:'res/RS.png'}
let userChoice={0:'res/LR.png',1:'res/LP.png',2:'res/LS.png'}
let choice={0:'Rock',1:'Paper',2:'Scissor'}
let currUserChoice='';
let currComputerChoice='';
let u='';
let c='';
let winningCondition=[[0,2],[1,0],[2,1]]
let res='';
let userScore=0;
let computerScore=0;



function myfun(){
    if(u && c){
        calcute();
        document.getElementById('user-hand').src='res/LR.png';
        document.getElementById('machine-hand').src='res/RR.png';
        document.getElementById('user-hand').style.transform='rotate(-10deg)';
        document.getElementById('machine-hand').style.transform='rotate(-10deg)';
        document.getElementById('screen').innerHTML='Rock';
        setTimeout(()=>{
            document.getElementById('user-hand').style.transform='rotate(10deg)';
            document.getElementById('machine-hand').style.transform='rotate(10deg)';
            document.getElementById('screen').innerHTML='paper';
        },500)
        setTimeout(()=>{
            document.getElementById('user-hand').style.transform='rotate(-10deg)';
            document.getElementById('machine-hand').style.transform='rotate(-10deg)';
            document.getElementById('screen').innerHTML='scissors';
        },1000)
        setTimeout(()=>{
            document.getElementById('user-hand').style.transform='rotate(0deg)';
            document.getElementById('machine-hand').style.transform='rotate(0deg)';
            document.getElementById('screen').innerHTML='shoot';
            document.getElementById('user-hand').src=u;
            document.getElementById('machine-hand').setAttribute('src',c);
            u='';
            c='';
            document.getElementById('user-choice').innerHTML='';
        },1500)
        setTimeout(()=>{
            document.getElementById('screen').innerHTML=res;
            document.getElementById('player-score').innerHTML=userScore;
            document.getElementById('computer-score').innerHTML=computerScore;
        },1700)
        
    }
    else{ 
        document.getElementsByClassName('choice-holder')[0].classList.add('shake-class');
        document.getElementById('user-choice').innerHTML='choose anything';
        document.getElementById('user-choice').style.color='red';
        setTimeout(()=>{
            document.getElementsByClassName('choice-holder')[0].classList.remove('shake-class');
        },1000)
    }
    
}

function choose(n){
    document.getElementById('user-choice').innerHTML=choice[n];
    document.getElementById('user-choice').style.color='white';
    currUserChoice=n;
    computerChoose();
    u=userChoice[currUserChoice];
    c=computerChoice[currComputerChoice];
}

function computerChoose(){
    let x=Math.floor(Math.random()*3);
    currComputerChoice=x;
}

function calcute(){
    let tar=[currUserChoice,currComputerChoice]
    if(currComputerChoice==currUserChoice){
        res='Draw';
    }
    else{
        let f=false;
        for(let i=0;i<winningCondition.length;i++){
            if(tar[0]==winningCondition[i][0] && tar[1]==winningCondition[i][1]){
                f=true;
            }
        }
        if(f==true){
            res='user wins'
            userScore+=1;
        }
        else{
            res='computer wins'
            computerScore+=1;
        }
    }
}

document.getElementById('restart').addEventListener("click",()=>{
    window.location='index.html';
})