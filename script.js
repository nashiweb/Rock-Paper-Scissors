
console.log("hello world");

function getComputerChoice(min ,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

computerChoice = getComputerChoice(1 , 4);

console.log(getComputerChoice(1 , 4));

let mychoice = prompt("rock = 1 paper =2 scissors = 3 :",)

if (mychoice == computerChoice){
    console.log("tie");
}
else{
    if(mychoice == 1 && computerChoice == 2 ){
        // me rock and com paper
        console.log("you lost");
        alert("you lost");
    }
    else if(mychoice == 1 && computerChoice == 3 ){
        // me rock    comp 3
        console.log("you win");
        alert("you win");
    }
    else if(mychoice == 2 && computerChoice == 1 ){
        // me paper   comp rock
        console.log("you win");
        alert("you win");
    }
    else if(mychoice == 2 && computerChoice == 3 ){
        // me paper  comp scissors
        console.log("you lost");
        alert("you lost");
    }
    else if(mychoice == 3 && computerChoice == 1 ){
        // me scissors  comp rock 
        console.log("you lost");
        alert("you lost");
    }
    else if(mychoice == 3 || computerChoice == 2 ){
        // scissors   comp paper
        console.log("you win");
        alert("you win");
    }

}