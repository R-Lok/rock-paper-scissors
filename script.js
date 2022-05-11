//1. function to play a round the moment a the player clicks any of the three buttons

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultBoard = document.querySelector('.result');
const playerScoreDisplay = document.querySelector('.playerScoreDisplay');
const computerScoreDisplay = document.querySelector('.computerScoreDisplay');
const resetButton = document.querySelector('#playAgain');
let playerWins = 0
let computerWins = 0
let ties = 0

function playerPlays(e) {
    const playerSelection = `${e.target.id.charAt(0).toUpperCase()}` + `${e.target.id.slice(1)}`;
    
    let computerSelection = computerPlay();
    let whoWins = playRound(playerSelection, computerSelection);
    let defeatMessage = "You lost the match!"

    resultBoard.innerText = whoWins;

    if (whoWins.charAt(4) === "w") {
        playerWins++;
    } else if (whoWins.charAt(4) === "l") {
        computerWins++;
    } else {
        ties++;
    }

    playerScoreDisplay.textContent = playerWins;
    computerScoreDisplay.textContent = computerWins;

    if (computerWins === 5) {
        computerMatchWin()
    }

    if (playerWins === 5) {
        playerMatchWin()
    }


}

rock.addEventListener('click', playerPlays);
paper.addEventListener('click', playerPlays);
scissors.addEventListener('click', playerPlays);
resetButton.addEventListener('click', resetGame)

function resetGame() {
    resultBoard.textContent = "";
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    rock.style.display = 'block';
    paper.style.display = 'block';
    scissors.style.display = 'block';
    resetButton.style.display = 'none';
    playerWins = 0;
    computerWins = 0;
    ties = 0;

}


// 2. Function to randomly determine the computer's choice between "Rock" "Paper" and "Scissors"
// let computerSelection = computerPlay()

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3)
    
    if (randomNumber === 0) {
        return "rock"
    }

    if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    }
    
}

// 3. Evaluate the different possible combinations of player and computer choice
// 4. Determine whether player or computer has won depending on the combination
// let outcome = playRound(playerSelection, computerSelection)

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "paper" ||
        playerSelection === "Paper" && computerSelection === "scissors" ||
        playerSelection === "Scissors" && computerSelection === "rock") {
            return `You lose! ${playerSelection} loses to ${computerSelection}!`
    } else if (playerSelection === "Rock" && computerSelection === "scissors" ||
               playerSelection === "Paper" && computerSelection === "rock" ||
               playerSelection === "Scissors" && computerSelection === "paper") {
                   return `You win! ${playerSelection} beats ${computerSelection}!`
               } else {
                   return `It's a tie! ${playerSelection} ties with ${computerSelection}!`
               }
            }



function playerMatchWin() {
    resultBoard.innerText =` Match over! You are victorious!`;
        rock.style.display = 'none';
        paper.style.display = 'none';
        scissors.style.display = 'none';
        resetButton.style.display = 'block';
}

function computerMatchWin() {  
    resultBoard.innerText = ` Match over! You are defeated!`;
    rock.style.display = 'none';
    paper.style.display = 'none';
    scissors.style.display = 'none';
    resetButton.style.display = 'block';
}



// 5. Play until once person has five wins

// game()

// function game() {

//     let playerWins = 0
//     let computerWins = 0
//     let gameCounter = 0
//     resultBoard.textContent = ""

//     for (let i = 0; playerWins < 5 || computerWins <; i++) {
//         let playerSelection = playerAnswer();
//         let computerSelection = computerPlay();
//         let outcome = playRound(playerSelection, computerSelection);
//         gameCounter++;

//         if (outcome.charAt(4) === 'w') {
//             playerWins++;
//         } else if (outcome.charAt(4) === 'l') {
//             computerWins++;
//         }
//         console.log(`${outcome} You currently have ${playerWins} wins and the computer has ${computerWins} wins. You have played ${gameCounter} out of 5 games.`)
//     }

//     if (playerWins > computerWins) {
//         console.log(`Match over, you won!`);
//     } else if (computerWins > playerWins) {
//         console.log(`Match over, you lost!`);
//     } else {
//         console.log(`Match over, it's a draw!`);
//     }

// } 