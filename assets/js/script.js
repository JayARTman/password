// Assignment code here

//var getRandomSync =

//Things to do
//Steps create the function or variable to grab random letters, numbers and symbols.
//Identify length of password
//Use Math.random with floor to determine what to pick
//
//Send password to #password

function generate(){
var charset ="abcdefghijklmnopqrstuvABCDEFGHIJKLMNOPQRSTUV123456789!@#$%^&*";
var passwordLength = 20;
var password="";
for (var i=0; i<passwordLength;i++){
  var random = Math.floor(Math.random() * charset.length);
  password += charset.substring(random,random + 1);
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
