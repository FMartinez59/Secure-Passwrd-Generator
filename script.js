// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordMin = 8;
var passwordMax = 128;
var passwordLibrary = {
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  special: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '<', '>', '?', '.'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
}
var finalPass = [];
// let passwordLength = 0;
let numbers = false;
let specialChar = false;
let upperCase = false;
let lowerCase = false;
var passwordLength = 0;

// var generatePassword = Math.floor(Math.random() * passwordLibrary.length);

function generatePassword() {
  //if else so if everything is true make password with all
  generateAskQuestions();
  dataAnalysis();
}
//this is declaring the function
function generateAskQuestions() {
   passwordLength = prompt("Please enter how many characters you would like");
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Must be more than 8 and no greater than 128")
    return;
  }
  do {
    numb = window.confirm("Would you like to include numbers in your password")
    console.log(passwordLibrary.numbers)
    specialChar = window.confirm("Would you like Special characters?")
    console.log(passwordLibrary.special)
    uppChar = window.confirm("Would you like uppercase letters?")
    console.log(passwordLibrary.upperCase)
    lowerChar = window.confirm("Would you like lowercase letters?")
    console.log(passwordLibrary.lowerCase)

    if (!numb && !specialChar && !upperCase && !lowerCase) {
      window.alert('You need to have at least one option selected')
    }

  } while (
    !numb && !specialChar && !upperCase && !lowerCase

  )
}

function dataAnalysis() {
 console.log('we here?')
  finalPass = [];
  for (let i = 0; finalPass.length < passwordLength; i++) {
    console.log('end4loop')
    if  (numb && finalPass.length < passwordLength) {
      finalPass.push(passwordLibrary.numbers[Math.floor(Math.random() * passwordLibrary.numbers.length)]);
      
    }
    console.log(finalPass )
    if (specialChar && finalPass.length < passwordLength) {
      finalPass.push(passwordLibrary.special[Math.floor(Math.random() * passwordLibrary.special.length)]);
    }

    if (upperCase && finalPass.length < passwordLength) {
      finalPass.push(passwordLibrary.upperCase[Math.floor(Math.random() * passwordLibrary.upperCase.length)]);
    }

    if (lowerCase && finalPass.length < passwordLength) {
      finalPass.push(passwordLibrary.lowerCase[Math.floor(Math.random() * passwordLibrary.lowerCase.length)]);
    }

  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//this is calling the function


