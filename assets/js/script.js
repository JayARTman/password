// Assignment code here
console.clear();


//var getRandomSync =
var getRandomUpper String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var getRandomUpper String.fromCharCode(Math.floor(Math.Random() * 26) + 65);
var getRandomNumber String.fromCharCode(Math.floor(Math.random() * 10) + 48);
var getRandomSymbol const symbols = "!@#$%^&*(){}[]=<>/,." [Math.floor(Math.random() * symbols.length)];

console.log(getRandomNumber)



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

.value 