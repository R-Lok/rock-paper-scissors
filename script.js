// // 1. Ask player to input their selection("Rock" "Paper" or "Scissors)
let playerSelection = playerAnswer()

function playerAnswer() {
    let answer = prompt("Rock, paper or scissors?")

    console.log(answer)

    if (answer.toLowerCase() === "rock" || answer.toLowerCase() === "paper" || answer.toLowerCase() === "scissors") {
        return answer
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

console.log(computerSelection)
// 3. Evaluate the different possible combinations of player and computer choice
// 4. Determine whether player or computer has won depending on the combination
