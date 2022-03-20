// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordMin = 8;
var passwordMax = 128;
var passwordLibrary = { 
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 
  special: ['!', '@', '#', '$', '%', '^', '&', '*','(', ')', '_', '+', '-', '=','<', '>', '?', '.'],  
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowerCase: ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
}

var passwordLength = []



 var generatePassword = Math.floor(Math.random() * passwordLibrary.length);

function generatePassword ()








//this is declaring the function
function generateAskQuestions() {
 passwordLength = window.prompt("Please enter how many characters you would like") ;
  console.log(passwordLength) 
  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Must be more than 8 and no greater than 128")
    return;
  } 
  numbers = window.confirm("Would you like to include numbers in your password");
    console.log(passwordLibrary.numbers);

  special = window.confirm("Would you like Special characters?");
    console.log(passwordLibrary.special);

  upperCase = window.confirm("Would you like uppercase letters?");
    console.log(passwordLibrary.upperCase);

  lowerCase = window.confirm("Would you like lowercase letters?");
    console.log(passwordLibrary.lowerCase);
 
    writePassword()
} 

//store answers in a global scale




// Write password to the #password input
function writePassword() {
var password = generatePassword();

  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  //this is calling the function
  generateAskQuestions()
} )
