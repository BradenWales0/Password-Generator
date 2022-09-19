var questions = window.prompt("How many Characters");
var questions = window.prompt("Do you want any upper case")
var questions = window.prompt("Do you want any lower case")
var questions = window.prompt("Do you want any numbers")
var questions = window.prompt("Do you want any special characters")

  




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

questions();