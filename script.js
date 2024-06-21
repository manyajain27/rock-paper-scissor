let humanScore=0, computerScore=0;
let input,humanChoice,computerChoice;
function getComputerChoice(arr=["Rock","Paper","Scissors"]){
computerChoice=arr[Math.floor(Math.random()*3)];
return computerChoice;
}

// console.log(getComputerChoice());
function getHumanChoice(){
    input=prompt("enter Rock,Paper,Scissors");
    return input;
}

function caseSensitive(){
    let string1=input.charAt(0);
    let string2=input.toLowerCase();
    humanChoice=string1.toUpperCase()+ string2.slice(1,string2.length);
    return humanChoice;
}

// console.log(getHumanChoice());
function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        alert("Its a tie!");
    }
    if(humanChoice==="Rock" && computerChoice==="Paper"){
        alert("You lose! Paper beats rock.");
        computerScore++;
    }
    if(computerChoice==="Rock" && humanChoice==="Paper"){
        alert("You Win! Paper beats rock.");
        humanScore++;
    }
    if(humanChoice==="Paper" && computerChoice==="Scissors"){
        alert("You lose! Scissors beats Paper.");
        computerScore++;
    }
    if(computerChoice==="Paper" && humanChoice==="Scissors"){
        alert("You Win! Scissors beats Paper.");
        humanScore++;
    }
    
    if(humanChoice==="Rock" && computerChoice==="Scissors"){
        alert("You Win! Rock beats Scissors.");
        humanScore++;
    }
    if(computerChoice==="Rock" && humanChoice==="Scissors"){
        alert("You Lose! Rock beats Scissors");
        computerScore++;
    }
}
function playGame(){
    for(let i=0;i<5;i++){
        getHumanChoice();
        caseSensitive();
        computerChoice= getComputerChoice();
        
        playRound(humanChoice,computerChoice);
        
    }
    if(computerScore > humanScore) {
    alert(`You Lost. ${humanScore}-${computerScore}`);
    }
    else if(computerScore < humanScore) {
    alert(`You Won! ${humanScore}-${computerScore}`);
    }
    else if(computerScore == humanScore) {
    alert(`It's a tie. ${humanScore}-${computerScore}`);
    }

}

playGame();