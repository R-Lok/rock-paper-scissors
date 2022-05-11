//1. function to play a round the moment a the player clicks any of the three buttons

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let resultBoard = document.querySelector('.result');

function playerPlays(e) {
    const playerSelection = `${e.target.id.charAt(0).toUpperCase()}` + `${e.target.id.slice(1)}`;
    let computerSelection = computerPlay();
    let whoWins = playRound(playerSelection, computerSelection);
    resultBoard.innerText = whoWins;
}

rock.addEventListener('click', playerPlays);
paper.addEventListener('click', playerPlays);
scissors.addEventListener('click', playerPlays);


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


// 5. Play a best out of five

// game()

// function game() {

//     let playerWins = 0
//     let computerWins = 0
//     let gameCounter = 0

//     for (let i = 0; i < 5; i++) {
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