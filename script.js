var lowerLetters = "abcdefghijklmnopqrstuvwxyz" ;
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYS" ;
var numbers = "1234567890" ;
var symbols = "!@#$%^&*()" ;

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length) ;
  password += chars.substring(randomNumber, randomNumber +1) ;
 }

 document.getElementById("password").value = password ;
 
 function copyPassword() {
  var copyText = document.getElementById("password") ;
  copyText.select();
  document.execCommand("copy") ; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) ;

questions() ;

var letterSelector = "" ;

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length) ;
  password += chars.substring(randomNumber, randomNumber +1) ;
 }

 function createPassword() {
 var letterLength = prompt ("How many letters do you want in your password?") ;
 if (letterLength < 8 || letterLength > 128) {
  window.alert("Choose the amount of letters you want in your password")
  return ;
 }
var symbolSelectors = confirm ("Do you want to include special symbols?") ;
if (symbolSelectors === true) {
    letterSelector += symbols ;
}
var lowerSelectors = confirm ("Would you like to add lowercase letters?") ;
if (lowerSelectors === true)  {
  letterSelectors += lowerLetters ;
}
var upperSelectors = confirm ("Do you want to add capital letters?") ;
if (upperselectors === true) {
  letterSelectors += upperLetters ;
}
var numberSelectors = confirm ("Would you like to add numbers?") ;
if (numbers === true) {
  lettetSelectors += numbers ;
}
 }