// Assignment code here

//Possible Character
var lower = ('"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"');
var upper = ('"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"');
var numbers = ('"0","1","2","3","4","5","6","7","8","9"');
var symbol = ('"!","\",""","#","$","%","&"');

var allChar = [];

//Start Function
function generatePassword() {
  var lengthChar = window.prompt("How many characters will your password be?");
  lengthChar = parseInt(lengthChar);
  if (lengthChar < 8 || lengthChar > 128) {
    alert("Please enter a password length between 8 and 128")
    return;
  }
  console.log(lengthChar);

  var yesLowercase = confirm("Would you like to include lower case letters?");
  var yesUppercase = confirm("Would you like to include upper case letters?");
  var yesNumber = confirm("Would you like to include numbers?");
  var yesSymbol = confirm("Would you like to include symbols?");
  
  //return value
  //var password = "";
  //for (var i = 0; i < length; i++) {
  //picks a character within charSet at index of random number
  //password += charSet.charAt(Math.floor(Math.random() * charSet.length));
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
