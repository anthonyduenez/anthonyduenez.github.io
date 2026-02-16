//event listeners
document.querySelector("#guessBtn").addEventListener("click", guess);
document.querySelector("#resetBtn").addEventListener("click", resetGame);

let numOfGuesses = 0;
let randomNum = Math.floor(Math.random() * 99) + 1;
console.log(randomNum);
let wins = 0;
let losses = 0;

function resetGame(){
    document.querySelector("#guessBtn").style.display = "block";
    document.querySelector("#prevGuesses").textContent = "Previous Guesses: ";
    document.querySelector("#result").textContent = "";
    document.querySelector("#result").style.color = "black";
    numOfGuesses = 0;
    randomNum = Math.floor(Math.random() * 99) + 1;
    document.querySelector("#resetBtn").style.display = "none";
    console.log(randomNum);
}

function guess(){
    let value = document.querySelector("#userGuess").value;
    if(value < 1 || value > 100){
        document.querySelector("#result").textContent = "Please enter a number between 1 and 100.";
    }
    else if(numOfGuesses < 6){
        document.querySelector("#prevGuesses").textContent += `${value} `;
        numOfGuesses++;
        if(value < randomNum){
            document.querySelector("#result").textContent = "Too Low!";
            document.querySelector("#result").style.color = "red";
        } else if(value > randomNum){
            document.querySelector("#result").textContent = "Too High!";
            document.querySelector("#result").style.color = "red";
        } else {
            document.querySelector("#guessBtn").style.display = "none";
            document.querySelector("#resetBtn").style.display = "block";
            document.querySelector("#result").textContent = "Congratulations! You've guessed the number!";
            document.querySelector("#result").style.color = "green";
            wins++;
            document.querySelector("#winLoss").textContent = `Wins: ${wins} | Losses: ${losses}`;
        }
    } else if(numOfGuesses == 6){
        document.querySelector("#prevGuesses").textContent += `${value} `;
        document.querySelector("#guessBtn").style.display = "none";
        document.querySelector("#resetBtn").style.display = "block";
        if(value == randomNum){
            document.querySelector("#result").textContent = "Congratulations! You've guessed the number!";
            document.querySelector("#result").style.color = "green";
            wins++;
        } else {
            document.querySelector("#result").style.color = "red";
            document.querySelector("#result").textContent = `Game Over! The number was ${randomNum}.`;
            losses++;
        }
        document.querySelector("#winLoss").textContent = `Wins: ${wins} | Losses: ${losses}`;
    }
}