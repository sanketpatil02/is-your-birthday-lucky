const birthdate = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#calculate");
const outputMessage = document.querySelector("#output-box")

checkButton.addEventListener("click", function validate() {
    const dateOfBirth = birthdate.value;
    const num = luckyNumber.value;

    if(dateOfBirth && num) {
        const sum = calculateSum(dateOfBirth);
        if(sum % num === 0) {
            showMessage(`${num} is your lucky number 🥳🥳🥳`);
        }
        else {
            showMessage(`${num} is not your lucky number 😕`);
        }
    } else {
        showMessage("Enter both fields properly.");
    }
});

function showMessage(msg) {
    outputMessage.innerText = msg;
}

function calculateSum(dateOfBirth) {
    let sum = 0;
    dateOfBirth = dateOfBirth.replaceAll("-", "");

    for(let i=0; i<dateOfBirth.length; i++) {
        sum += Number(dateOfBirth[i]);
    }

    return sum;
}