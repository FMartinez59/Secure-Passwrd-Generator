// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordMin = 8;
var passwordMax = 128;
var passwordLibrary = { 
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 
  special: ['!', '@', '#', '$', '%', '^', '&', '*','(', ')', '_', '+', '-', '=','<', '>', '?', '.'],  
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] ,
  lowerCase: 'abcdefghijklmnopqrstuvwxyz'
};

// var generatePassword = Math.floor(Math.random() * passwordLibrary.length);


//this is declaring the function
function generateAskQuestions() {
  var passwordLength= prompt("Please enter how many characters you would like") ;
  console.log(passwordLength) 
  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Must be more than 8 and no greater than 128")
    return;
  } 
  window.confirm("Would you like to include numbers in your password")
    console.log(passwordLibrary.numbers)

  window.confirm("Would you like Special characters?")
    console.log(passwordLibrary.special)

  window.confirm("Would you like uppercase letters?")
    console.log(passwordLibrary.upperCase)

  window.confirm("Would you like lowercase letters?")
    console.log(passwordLibrary.lowerCase)
 
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
