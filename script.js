// // 1. Function to ask player to input their selection("Rock" "Paper" or "Scissors)
// let playerSelection = playerAnswer()

function playerAnswer() {
    let answer = prompt("Rock, paper or scissors?")

    if (answer === null) {
        alert("Please submit an answer.")
        playerAnswer()
    } else if (answer.toLowerCase() === "rock" || answer.toLowerCase() === "paper" || answer.toLowerCase() === "scissors") {
        return answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase()
    } else {
        alert("Invalid answer. Please enter rock, paper or scissors.")
        playerAnswer()
    }

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
            return `You lose! ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection === "Rock" && computerSelection === "scissors" ||
               playerSelection === "Paper" && computerSelection === "rock" ||
               playerSelection === "Scissors" && computerSelection === "paper") {
                   return `You win! ${playerSelection} beats ${computerSelection}!`
               } else {
                   return `It's a tie! ${playerSelection} ties with ${computerSelection}!`
               }
            }


// 5. Play a best out of five

game()

function game() {

    let playerWins = 0
    let computerWins = 0
    let gameCounter = 0

    for (let i = 0; i < 5; i++) {
        let playerSelection = playerAnswer();
        let computerSelection = computerPlay();
        let outcome = playRound(playerSelection, computerSelection);
        gameCounter++;

        if (outcome.charAt(4) === 'w') {
            playerWins++;
        } else if (outcome.charAt(4) === 'l') {
            computerWins++;
        }
        console.log(`${outcome} You currently have ${playerWins} wins and the computer has ${computerWins} wins. You have played ${gameCounter} out of 5 games.`)
    }

    if (playerWins > computerWins) {
        console.log(`Match over, you won!`);
    } else if (computerWins > playerWins) {
        console.log(`Match over, you lost!`);
    } else {
        console.log(`Match over, it's a draw!`);
    }

} 