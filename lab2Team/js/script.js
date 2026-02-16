//event listeners
document.querySelector("#guessBtn").addEventListener("click", guess);

let numOfGuesses = 0;
let randomNum = Math.floor(Math.random() * 99) + 1;

function guess(){
    console.log(randomNum);
    if(numOfGuesses < 6){
        let value = document.querySelector("#userGuess").value;
        document.querySelector("#prevGuesses").textContent += `${value} `;
        numOfGuesses++;
        if(value < randomNum){
            document.querySelector("#result").textContent = "Too Low!";
            document.querySelector("#result").style.color = "red";
        } else if(value > randomNum){
            document.querySelector("#result").textContent = "Too High!";
            document.querySelector("#result").style.color = "red";
        } else {
            document.querySelector("#result").textContent = "Congratulations! You've guessed the number!";
            document.querySelector("#result").style.color = "green";
        }
    } else if(numOfGuesses == 6){
        document.querySelector("#result").textContent = `Game Over! The number was ${randomNum}.`;
    }
}