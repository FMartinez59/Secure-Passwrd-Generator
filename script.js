// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = Math.floor(Math.random() * passwordLibrary.length);
var passwordMin = 8;
var passwordMax = 128;
var passwordLibrary = { 
  numbers: '0123456789',
  special: '!@#$%^&*()_+-=<>?.,', 
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowerCase: 'abcdefghijklmnopqrstuvwxyz'
};











// Write password to the #password input
function writePassword() {
var password = generatePassword();

  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) {
  window.prompt(' How many characters would you like?')

}


