
function playRound(playerSelection, computerSelection){
    //    your code here 
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection){
        return ["It's a tie!",0];
    }
    else if ((computerSelection== "rock" && playerSelection == "scissors") ||
            (computerSelection == "paper" && playerSelection == "rock")||
            (computerSelection == 'scissors' && playerSelection == "paper")){
                return [`Oh no, you lost! ${computerSelection} beats ${playerSelection}!`,-1];
            }
    else{
        return [`Alright you win! ${playerSelection} beats ${computerSelection}!`, 1];
    }
}

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = choices[Math.floor(Math.random()*choices.length)];
    return compChoice;
}

function game(){
    
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5 ){
        const computerSelection = getComputerChoice();

        const playerSelection = prompt("Rock, Paper or Scissors. Choose wisely!:");

        const result = playRound(playerSelection, computerSelection);

        if(result[1]==-1){
            computerScore++;
        }
        else if(result[1]==1){
            playerScore++;
        }

        console.log(result[0]);
        console.log(`Score:
        Player: ${playerScore}, Computer: ${computerScore}`);

    }

    if(playerScore > computerScore){
        console.log("Eyyyy lets gooo! You kicked the computers butt!")
    }
    else{
        console.log("You gonna let the computer do that to you? Srsly?")
    }
}

game()


