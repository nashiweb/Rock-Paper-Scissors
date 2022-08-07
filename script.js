
console.log("hello world");

let computerScore = 0;
let myScore = 0;

function getComputerChoice(){
    let choice = ["rock","paper","scissor"];
    let randon_choice = Math.floor(Math.random() * choice.length);
    return choice[randon_choice];
}


console.log( getComputerChoice());

let computerChoice = getComputerChoice();

function playGame(mychoice,computerChoice){

    if (mychoice == computerChoice){
        console.log("tie" );
    }
    else if((mychoice == 'rock' && computerChoice == 'scissor') || 
    (mychoice == 'paper' && computerChoice == 'rock') ||
    (mychoice == 'scissors' && computerChoice == 'paper')){
        console.log("you win");
    }
    else{
        console.log("you lose");
    }
}


let mychoice = "rock";

console.log(playGame());
