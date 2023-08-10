const introText = document.querySelector('.intro-text');
const menuContainer = document.querySelector('.menu-title');
const gameContainer = document.querySelector('.game-container');
const player1Score = document.querySelector('#player1-score');
const player2Score = document.querySelector('#player2-score');
const resultsContainer = document.querySelector('.result');

const buttons = document.querySelectorAll(".button")
let computerScore = 0;
let playerScore=0;



const sentences = [
    'After entering the New World...',
    'you have defeated many strong enemies...',
    'Do you have what it takes to face your biggest challenge yet ???',
    'Defeat Kaido in Rock Paper Scissors!',
    'The first to 5 will be proclaimed King of the Pirates!!!',
];


const sleep = (time) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
}

async function cycleSentences(currentIndex) {
    if (currentIndex >= sentences.length) {
    
        await sleep(200);
        menuContainer.style.opacity = 1;
        gameContainer.style.opacity = 1;
        return;
    }
    introText.innerHTML = '';
    for (let letter of sentences[currentIndex]) {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = letter;
        introText.appendChild(letterSpan);
        await sleep(100);
    }
    await sleep(750)
    cycleSentences(currentIndex + 1); 
};

function assignListener(buttonNodeList){
  for (let button of buttonNodeList){
    button.addEventListener('click', function(){
      const buttonId = button.getAttribute('id');
      playRound(buttonId);
    });
  }
}

cycleSentences(0);
assignListener(buttons);



function buttonClick(playerMove){
  console.log(`You clicked ${playerMove}`);
}





function playRound(playerSelection) {
    //    your code here 
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();

    console.log(`${playerSelection} vs ${computerSelection}`);

    if (playerSelection == computerSelection) {
      resultsContainer.textContent = "It's a tie!";
        
    }
    else if ((computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == 'scissors' && playerSelection == "paper")) {
          resultsContainer.textContent = `Oh no, you lost! ${computerSelection} beats ${playerSelection}!`;
          computerScore++;
    }
    else {
      resultsContainer.textContent = `Alright you win! ${playerSelection} beats ${computerSelection}!`;
      playerScore++;
    }
    player1Score.textContent = playerScore;
    player2Score.textContent = computerScore;
    game();

}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function game() {


    

    if ( computerScore == 5) {
      resultsContainer.textContent = `Oh no, you Lost! Every king needs a Jester!`;
    }
    else if(playerScore == 5) {
      resultsContainer.textContent = `You win! Hail King Luffy!`;
    }
}




