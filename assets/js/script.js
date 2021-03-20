// Assignment code here

//var getRandomSync =

//Things to do
//Steps create the function or variable to grab random letters, numbers and symbols.
//Identify length of password
//Use Math.random with floor to determine what to pick
//
//Send password to #password
var length = prompt("How many characters will your password be? Min characters 8 max 128");
var charType = prompt("Enter a character type: symbol, number, upper, lowercase");
var symbol = prompt("Would you like to include symbols");
var num = prompt("Would you like to include numbers?");
var upper = prompt("would you like to include capital letters");

function generate(){
var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if( charTypeLower === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "numeric" ) {
    charSet = "0123456789";
  } else if( charTypeLower === "special" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 

  //return value
  var password = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
}

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generate();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
