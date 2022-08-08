
console.log("hello world");

let computerScore = 0;
let myScore = 0;

function getComputerChoice(){
    let choice = ["rock","paper","scissor"];
    let randon_choice = Math.floor(Math.random() * choice.length);
    return choice[randon_choice];
}


const computerChoice = getComputerChoice();
let mychoice = prompt("Choose your weapon(rock , paper ,scissor)", );
mychoice = mychoice.toLowerCase();

console.log(computerChoice);


function playGame(mychoice,computerChoice){

    if ((mychoice == 'rock' && computerChoice == 'scissor') || 
    (mychoice == 'paper' && computerChoice == 'rock') ||
    (mychoice == 'scissors' && computerChoice == 'paper')){
        console.log("you win");
    
    }
    else if(mychoice == computerChoice){
        console.log("tie" );
    }
    else{
        console.log("you lose");
    }
}


function game(){

}



console.log(playGame(mychoice,computerChoice));
