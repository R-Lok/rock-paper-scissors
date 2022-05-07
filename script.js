// // 1. Ask player to input their selection("Rock" "Paper" or "Scissors)
let playerSelection = playerAnswer()

function playerAnswer() {
    let answer = prompt("Rock, paper or scissors?")

    if (answer.toLowerCase() === "rock" || answer.toLowerCase() === "paper" || answer.toLowerCase() === "scissors") {
        return answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase()
    } else if (answer === null) {
        alert("Please submit an answer.")
        playerAnswer()
    } else {
        alert("Invalid answer. Please enter rock, paper or scissors.")
        playerAnswer()
    }

}

// 2. Randomly determine the computer's choice between "Rock" "Paper" and "Scissors"
let computerSelection = computerPlay()

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
let outcome = playRound(playerSelection, computerSelection)

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
console.log(outcome)