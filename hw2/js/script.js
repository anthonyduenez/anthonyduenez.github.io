document.querySelector("#spinBtn").addEventListener('click', spin);
document.querySelector("#betAmount").addEventListener('change', payoutCalc);

let betAmount = document.querySelector("#betAmount").value;
const icons = ["https://img.icons8.com/?size=100&id=19527&format=png&color=000000", "https://img.icons8.com/?size=100&id=ARv3phtnx9Bx&format=png&color=000000", "https://img.icons8.com/?size=100&id=63230&format=png&color=000000"];
const rainbowColor = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let winning = false;

function spin() {
    let randomIndex = Math.floor(Math.random() * icons.length);
    document.getElementById("slot1").src = icons[randomIndex];
    randomIndex = Math.floor(Math.random() * icons.length);
    document.getElementById("slot2").src = icons[randomIndex];
    randomIndex = Math.floor(Math.random() * icons.length);
    document.getElementById("slot3").src = icons[randomIndex];

    if(document.getElementById("slot1").src == document.getElementById("slot2").src && 
       document.getElementById("slot2").src == document.getElementById("slot3").src) 
    {
        winning = true;
        document.querySelector("#result").style.fontSize = "3rem";
        document.querySelector("#result").textContent = `Congratulations! You won ${betAmount*10}!!!`;
        rainbow();
    } else {
        winning = false;
        document.querySelector("#result").style.fontSize = "1.5rem";
        document.querySelector("#result").style.color = "white";
        document.querySelector("#result").textContent = "Always one away from winning big!";
    }
}

function rainbow(){
    const resultElement = document.querySelector("#result");
    let colorIndex = 0;
    setInterval(() => {
        if(!winning) return;
        resultElement.style.color = rainbowColor[colorIndex];
        colorIndex = (colorIndex + 1) % rainbowColor.length;
        
    }, 250);
}

function payoutCalc() {
    betAmount = document.querySelector("#betAmount").value;
    let payout = betAmount * 10;
    document.querySelector("#payout").textContent = `PAYOUT: ${payout}`;
}