// Assignment code here
var generateBtn = document.querySelector("#generate");

//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Possible Character
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var symbol = ["!","#","$","%","&"];

var allChar = [];
var allPassword = "";
//Start Function
function generatePassword() {
  //Start prompts
  allPassword = "";
  var lengthChar = window.prompt("How many characters will your password be?");
  if (lengthChar < 8 || lengthChar > 128) {
    lengthChar = parseInt(lengthChar);
    alert("Please enter a password length between 8 and 128 characters.");
    //return;
  }

  console.log(lengthChar);

  var yesLowercase = confirm("Would you like to include lower case letters?");
  console.log(yesLowercase);

  var yesUppercase = confirm("Would you like to include upper case letters?");
  console.log(yesUppercase);

  var yesNumber = confirm("Would you like to include numbers?");
  console.log(yesNumber);

  var yesSymbol = confirm("Would you like to include symbols?");
  console.log(yesSymbol);

  var charOptions = {
    lengthChar: lengthChar,
    yesLowercase: yesLowercase,
    yesUppercase: yesUppercase,
    yesNumber: yesNumber,
    yesSymbol: yesSymbol
  }
console.log(charOptions);
 //return charOptions;
 
  if(charOptions.yesLowercase) {
    allChar = allChar.concat(lower);
    var chars = lower[Math.floor(Math.random() * lower.length)];
    allPassword = allPassword + chars;
    console.log(chars);
    console.log(allPassword);
  }

  if(charOptions.yesUppercase) {
    allChar = allChar.concat(upper);
    var chars = upper[Math.floor(Math.random() * upper.length)];
    allPassword = allPassword + chars;
  }

  if(charOptions.yesNumber) {
    allChar = allChar.concat(number);
    var chars = number[Math.floor(Math.random() * number.length)];
    allPassword = allPassword + chars;

  }  
  
    if(charOptions.yesSymbol) {
     allChar = allChar.concat(symbol);
     var chars = symbol[Math.floor(Math.random() * symbol.length)];
    allPassword = allPassword + chars;
  }
  
  console.log(allChar);
  console.log(allPassword);
  
  var remaining = lengthChar - allPassword.length;
  console.log(remaining);

  for (var i = 0; i < remaining; i++){
    allPassword += allChar[Math.floor(Math.random() * allChar.length)];
    console.log("password:", allPassword);
  }

  return allPassword;
};
  
  

// Get references to the #generate element


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
