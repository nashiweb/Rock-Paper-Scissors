
console.log("hello world");

let computerScore = 0;
let myScore = 0;

let result = ""; //result of single round


// FUNCTION to randomly return rock paper or scissor       for computer
function getComputerChoice(){
    let choice = ["rock","paper","scissor"];
    let randon_choice = Math.floor(Math.random() * choice.length);
    return choice[randon_choice];
}


const computerChoice = getComputerChoice();
let mychoice = prompt("Choose your weapon(rock , paper ,scissor)", );
mychoice = mychoice.toLowerCase();

console.log(computerChoice);

// FUNCTION for the single round of the game
function playGame(mychoice,computerChoice){

    

    if ((mychoice == 'rock' && computerChoice == 'scissor') || 
    (mychoice == 'paper' && computerChoice == 'rock') ||
    (mychoice == 'scissors' && computerChoice == 'paper')){
        result = "you win";
    }
    else if(mychoice == computerChoice){
        result = "tie";
    }
    else{
        result = "you lost";
    }
    return result;
}


console.log(playGame(mychoice,computerChoice));
console.log(mychoice);

