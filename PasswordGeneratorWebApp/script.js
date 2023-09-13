const inputSlider = document.querySelector("[data-lengthSlider]");
console.log(inputSlider);
const lengthDisplay = document.querySelector("[data-lengthNumber]")
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase")
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateBtn");
const allCheckbox = document.querySelectorAll("input[type=checkbox");

let password = "";
let passwordLength = 15;
let checkCount = 1;
handleSlider();


// set PasswordLength
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function setIndicator(color){

    indicator.computedStyleMap.backgroundColor = color;
}
