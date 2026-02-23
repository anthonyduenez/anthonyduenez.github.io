let zipElement = document.querySelector("#zipcode");
zipElement.addEventListener("input", displayCity);

displayStates();
async function displayStates(){
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        
        for(let d of data) {
            let optionEl = document.createElement("option");
            optionEl.textContent = d.state;
            optionEl.value = d.usps
            document.querySelector("#state").append(optionEl);
        }

        } catch (err) {
            if (err instanceof TypeError) {
                alert("Error accessing API endpoint (network failure)");
            } else {
                alert(err.message);
            }
    }
}

let stateElement = document.querySelector("#state");
stateElement.addEventListener("change", displayCounties);

async function displayCounties(){
    for(let option of document.querySelector("#county").options) {
        option.remove();
    }

    let state = stateElement.value;
    const response = await fetch(`https://csumb.space/api/countyListAPI.php?state=${state}`);
    const data = await response.json();

    for(let d of data) {
        let optionEl = document.createElement("option");
        optionEl.textContent = d.county;
        optionEl.value = d.county
        document.querySelector("#county").append(optionEl);
    }
}

let userElement = document.querySelector("#user");
userElement.addEventListener("input", checkUserAvailability);

async function checkUserAvailability() {
    let user = userElement.value;
    let response = await fetch(`https://csumb.space/api/usernamesAPI.php?username=${user}`);
    let data = await response.json();

    if(data.available == false) {
        document.querySelector("#availableText").style.color = "red";
        document.querySelector("#availableText").textContent = "Username is not available";
    } else {
        document.querySelector("#availableText").style.color = "green";
        document.querySelector("#availableText").textContent = "Username is available";
    }
}

async function displayCity() {
    let zipcode = zipElement.value;
    let response = await fetch(`https://csumb.space/api/cityInfoAPI.php?zip=${zipcode}`);
    let data = await response.json();

    document.querySelector("#cityText").textContent = data.city;
    document.querySelector("#latitudeText").textContent = data.latitude;
    document.querySelector("#longitudeText").textContent = data.longitude;  
}

let signupElement = document.querySelector("#submitBtn");
signupElement.addEventListener("click", checkSignup);

let passwordElement = document.querySelector("#password");
passwordElement.addEventListener("click", suggestPassword);

async function suggestPassword(){
    let passwordSuggestedText = document.querySelector("#text");
    let response = await fetch(`https://csumb.space/api/suggestedPassword.php?length=8`);
    let data = await response.json();
    passwordSuggestedText.textContent = `Suggested Password: ${data.password}`;
}


function checkSignup() {
    let password = document.querySelector("#password").value;
    let password2 = document.querySelector("#passwordAgain").value;
    document.querySelector("#signupError").style.color = "red";

    alert(password + " " + password2);
    if(password != password2 && password.length < 6) {
        document.querySelector("#signupError").textContent = "Passwords do not match and password must be at least 6 characters";
    }
    else if (password.length < 6) {
        document.querySelector("#signupError").textContent = "Password must be at least 6 characters";
    }
    else if(password != password2) {
        document.querySelector("#signupError").textContent = "Passwords do not match";
    }
}