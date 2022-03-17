// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordMin = 8;
var passwordMax = 128;
var passwordLibrary = { 
  numbers: '0123456789',
  special: '!@#$%^&*()_+-=<>?.,', 
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowerCase: 'abcdefghijklmnopqrstuvwxyz'
};

// var generatePassword = Math.floor(Math.random() * passwordLibrary.length);


//this is declaring the function
function generateAskQuestions() {
  var passwordLength= prompt("Please enter how many characters you would like") ;
  console.log(passwordLength) 
  if (passwordLength < 8 || passwordLength >128 ) {
    alert("Is not enough characters. Must be more than 8 and no greater than 128")
    generateAskQuestions()  
  } else 
} 





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
