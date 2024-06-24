let humanScore=0, computerScore=0;
let input,humanChoice,computerChoice;
function getComputerChoice(arr=["Rock","Paper","Scissors"]){
computerChoice=arr[Math.floor(Math.random()*3)];
return computerChoice;
}
const button1=document.querySelector(".rockimg");
const button2=document.querySelector(".paperimg");
const button3=document.querySelector(".scissorsimg");
const image1=document.querySelector("#img1");
const image2=document.querySelector("#img2");
const you=document.querySelector(".score1");
const computer=document.querySelector(".score2");



// console.log(getComputerChoice());
function updateImages() {
    image1.src = `./images/${humanChoice}.png`;
    image2.src = `./images/${computerChoice}.png`;
}
    
    button1.addEventListener("click", ()=>{
        humanChoice="Rock";
        playRound(humanChoice,getComputerChoice());
        updateImages();
    });
    button2.addEventListener("click", ()=>{
        humanChoice="Paper";
        playRound(humanChoice,getComputerChoice());
        updateImages();
    });
    button3.addEventListener("click", ()=>{
        humanChoice="Scissors";
        playRound(humanChoice,getComputerChoice());
        updateImages();
    });


const result=document.querySelector(".display");

// console.log(getHumanChoice());
function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        result.innerHTML="Its a <strong>tie</strong>!";
        you.textContent=`You: ${humanScore}`;
        computer.textContent=`Computer: ${computerScore}`;
    }
    if(humanChoice==="Rock" && computerChoice==="Paper"){
        result.innerHTML="You <strong>lose</strong>! Paper beats rock.";
        computerScore++;
        you.textContent=`You: ${humanScore}`;
        computer.textContent=`Computer: ${computerScore}`;
    }
    if(computerChoice==="Rock" && humanChoice==="Paper"){
        result.innerHTML="You <strong>Win</strong>! Paper beats rock.";
        humanScore++;
        you.textContent=`You: ${humanScore}`;
        computer.textContent=`Computer: ${computerScore}`;
    }
    if(humanChoice==="Paper" && computerChoice==="Scissors"){
        result.innerHTML="You <strong>lose</strong>! Scissors beats Paper.";
        computerScore++;
        you.textContent=`You: ${humanScore}`;
        computer.textContent=`Computer: ${computerScore}`;
    }
    if(computerChoice==="Paper" && humanChoice==="Scissors"){
        result.innerHTML="You <strong>Win</strong>! Scissors beats Paper.";
        humanScore++;
        you.textContent=`You: ${humanScore}`;
        computer.textContent=`Computer: ${computerScore}`;
    }
    
    if(humanChoice==="Rock" && computerChoice==="Scissors"){
        result.innerHTML="You <strong>Win</strong>! Rock beats Scissors.";
        humanScore++;
        you.textContent=`You: ${humanScore}`;
        computer.textContent=`Computer: ${computerScore}`;
    }
    if(computerChoice==="Rock" && humanChoice==="Scissors"){
        result.innerHTML="You <strong<Lose</strong>! Rock beats Scissors";
        computerScore++;
        you.textContent=`You: ${humanScore}`;
        computer.textContent=`Computer: ${computerScore}`;
    }
}
