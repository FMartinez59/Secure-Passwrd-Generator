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
let numbers = false;
let specialChar = false;
let upperCase = false;
let lowerCase = false;
var passwordLength = 0;

function generatePassword() {
  generateAskQuestions();
  return dataAnalysis();
}
//this is declaring the function
function generateAskQuestions() {
   passwordLength = prompt("Please enter how many characters you would like");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Must be more than 8 and no greater than 128")
    return;
  }
  //asks the user questions on what they want to include in the password and stores it
  do {
    numb = window.confirm("Would you like to include numbers in your password")
    console.log(passwordLibrary.numbers)
    specialChar = window.confirm("Would you like Special characters?")
    console.log(passwordLibrary.special)
    uppChar = window.confirm("Would you like uppercase letters?")
    console.log(passwordLibrary.upperCase)
    lowerChar = window.confirm("Would you like lowercase letters?")
    console.log(passwordLibrary.lowerCase)
//if the user selects nothing the computer will tell them to select at least one item then end the function
    if (!numb && !specialChar && !upperCase && !lowerCase) {
      window.alert('You need to have at least one option selected')
    }
    //this makes sure they dont leave everything false 
  } while (
    !numb && !specialChar && !upperCase && !lowerCase
  )
}
//this is the brain of the password generator. This function collects the data and then using a for loop + if statements to generate the password based on user input
// the way this was designed is so that if the response is false it will not run that specific line of code, but if it is true it will pick out the necessary amount of random characters from the object at the top,
// then bring it back and push it to the password holder (in my case its finalPass).
function dataAnalysis() {
  finalPass = [];
  for (let i = 0; finalPass.length < passwordLength; i++) {
    if  (numb && finalPass.length < passwordLength) {
      finalPass.push(passwordLibrary.numbers[Math.floor(Math.random() * passwordLibrary.numbers.length)]);
    }
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
  return finalPass;
 }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join('');
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);