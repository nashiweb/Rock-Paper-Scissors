let playerScore = 0;
let computerScore = 0;

function getComputerchoice() {
    let choice = ["rock","paper","scissor"];
    let randon_choice = Math.floor(Math.random() * choice.length);
    return choice[randon_choice];
}


function playRound(playerSelection,computerSelection) {

    playerSelection =  playerSelection.toLowerCase();


    if ((playerSelection == 'rock' && computerSelection == 'scissor') || 
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')){

        playerScore ++;
        return "you win";
    }
    else if(playerSelection == computerSelection){
        return "tie";
    }
    else{
        computerScore ++;
        return "you lost";
    }
}




function game(){
    for(let i = 1 ; i <= 5; i++ ){
        const computerSelection = getComputerchoice();
        const playerSelection = prompt( i +" enter your choice Rock Paper Scissor : ",)
        console.log( i + " computer = " + computerSelection + "   " + "player = " + playerSelection);
        console.log("computer score = " + computerScore + "    player Score = " + playerScore);
        console.log(playRound(playerSelection,computerSelection));
        alert(playRound(playerSelection,computerSelection));
        console.log("");
        console.log("");
    }
}

game();
