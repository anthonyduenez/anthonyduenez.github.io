document.querySelector("button").addEventListener("click", gradeQuiz);
localStorage.setItem("rounds", 0);

shuffleQ1Choices();
function shuffleQ1Choices() {
    let q1Choices = ["Warriors", "Lakers", "Celtics", "Bulls"];
    q1Choices = _.shuffle(q1Choices);

    for (let i of q1Choices) {
        let radioElement = document.createElement("input");
        radioElement.setAttribute("type", "radio");
        radioElement.setAttribute("name", "question1");
        radioElement.setAttribute("value", i);

        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(radioElement);

        document.querySelector("#q1ChoicesDiv").append(labelElement);
    }
}

function gradeQuiz() {
    let userAnswer1 = document.querySelector('input[name="question1"]:checked').value;
    let userAnswer2 = document.querySelector('#question2').value;
    let userAnswer3 = document.querySelector('#question3').value;
    let userAnswer4 = document.querySelector('#question4').value;
    let userAnswer5A = document.querySelector('#cb1').checked;
    let userAnswer5B = document.querySelector('#cb2').checked;
    let userAnswer5C = document.querySelector('#cb3').checked;
    let userAnswer5D = document.querySelector('#cb4').checked;
    let score = 0;
    localStorage.setItem("rounds", parseInt(localStorage.getItem("rounds")) + 1);

    document.querySelector("#q1Image").style.display = "inline";
    document.querySelector("#q2Image").style.display = "inline";
    document.querySelector("#q3Image").style.display = "inline";
    document.querySelector("#q4Image").style.display = "inline";
    document.querySelector("#q5Image").style.display = "inline";

    if (userAnswer1 == "Warriors") {
        score += 20;
        document.querySelector("#q1").style.background = "green";
        document.querySelector("#q1Image").src = "https://cdn-icons-png.flaticon.com/512/190/190411.png";
    } else {
        document.querySelector("#q1").style.background = "salmon";
        document.querySelector("#q1Image").src = "https://cdn-icons-png.flaticon.com/512/1828/1828778.png";
    }

    if (userAnswer2 == "Sharks") {
        score += 20;
        document.querySelector("#q2").style.background = "green";
        document.querySelector("#q2Image").src = "https://cdn-icons-png.flaticon.com/512/190/190411.png";
    } else {
        document.querySelector("#q2").style.background = "salmon";
        document.querySelector("#q2Image").src = "https://cdn-icons-png.flaticon.com/512/1828/1828778.png";
    }

    if (userAnswer3 == 2022) {
        score += 20;
        document.querySelector("#q3").style.background = "green";
        document.querySelector("#q3Image").src = "https://cdn-icons-png.flaticon.com/512/190/190411.png";
    } else {
        document.querySelector("#q3").style.background = "salmon";
        document.querySelector("#q3Image").src = "https://cdn-icons-png.flaticon.com/512/1828/1828778.png";
    }
    if (userAnswer4 == 5) {
        score += 20;
        document.querySelector("#q4").style.background = "green";
        document.querySelector("#q4Image").src = "https://cdn-icons-png.flaticon.com/512/190/190411.png";
    } else {
        document.querySelector("#q4").style.background = "salmon";
        document.querySelector("#q4Image").src = "https://cdn-icons-png.flaticon.com/512/1828/1828778.png";
    }

    if (userAnswer5A && userAnswer5B && userAnswer5C && userAnswer5D) {
        score += 20;
        document.querySelector("#q5").style.background = "green";
        document.querySelector("#q5Image").src = "https://cdn-icons-png.flaticon.com/512/190/190411.png";
    } else {
        document.querySelector("#q5").style.background = "salmon";
        document.querySelector("#q5Image").src = "https://cdn-icons-png.flaticon.com/512/1828/1828778.png";
    }

    document.querySelector("#results").textContent = `Your score is ${score}%, better luck next time.`;
    if (score >= 80) {
        document.querySelector("#results").textContent = `Congrats you passed with a score of ${score}%`;
    }
    document.querySelector("#results").textContent += `\nYou're on try #${localStorage.getItem("rounds")}`;
}
