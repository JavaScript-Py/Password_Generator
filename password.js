// Arrays containing all characters the password can have.
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphabetUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const symbols = [" ", "!", "'", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const arrays = [];

//Getting elements from HTML.
const send = document.getElementById("send")
const alphabetUpperCaseCheckbox = document.getElementById("alphabet-uppercase");
const alphabetCheckbox = document.getElementById("alphabet");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const passwordLength = document.getElementById("password-lenght");
const passwordInHTML = document.getElementById("p");
const copyText = document.getElementById("copy-text");

let password = '';

//This functions randomly picks a item from the array.
function random(array) {
    let item = array[Math.floor(Math.random() * array.length)];
    return item;
}

//Gets the characters received from the "random" function and puts in the password.
function passwordGenerator() {
    let i = 0;
    while (i < passwordLength.value) {
        let element = random(arrays);
        let element2 = random(element);
        password = password.concat(element2);
        i++;
    }
}

//Checks if the HTML element is checked or not, and if the array "arrays" contains the respective characters array.
function checker(array, element) {
    if (arrays.indexOf(array) == -1) {
        if (element.checked) {
            arrays.push(array);
        }
    } else if (arrays.indexOf(array) != -1) {
        if (!element.checked) {
            arrays.splice(arrays.indexOf(array));
        }
    }
}

//Init function.
send.addEventListener('click', () => {
    password = '';
    passwordInHTML.innerHTML = '';
    checker(numbers, numbersCheckbox);
    checker(alphabetUpperCase, alphabetUpperCaseCheckbox);
    checker(alphabet, alphabetCheckbox);
    checker(symbols, symbolsCheckbox);
    passwordGenerator();
    if (passwordLength.value <= 0){
        window.alert("Put a valid number");
        copyText.style = "display: none";
        return 0;
    } else{
        passwordInHTML.innerHTML = "The password generated: " + password;
    }
    copyText.style = "display: block";
});

//Copy the password.
copyText.addEventListener('click', () => {
    if (password) {
        navigator.clipboard.writeText(password);
    } else{
        window.alert("There is nothing to copy");
    }
});