// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

// Write password to the #password input
function generatePassword() {
  var eligibleCharacters = [];
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const symbol = "!@#$%^&*() ";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = '0123456789';
  //var combinedChars = upper.concat(lower, symbol, number);

  var passLength = window.prompt("Choose your password length");

  // passLength = Number(passLength)
  
  if (passLength < 8) {
    alert("Password must be at least 8 characters!");
    return;
  
  }
  // todo make sure number entered was a valid number

  if (passLength > 128) {
    alert("Password cannot be greater than 128 characters!");
    return;
  }
  //   if (isNaN){
  //   alert("Please choose only numbers!!!")
  //   return;
  // }

  var uppercase = window.confirm(
    "Do you want uppercase letters? Click OK for Yes and cancel for NO"
  );
  if (uppercase === true) {
    eligibleCharacters = eligibleCharacters.concat(upper);
  }

  var lowercase = window.confirm(
    "Do you want lowercase letters? Click OK for Yes and cancel for NO"
  );
  if (lowercase === true) {
    eligibleCharacters = eligibleCharacters.concat(lower);
  }

  var numbers = window.confirm(
    "Do you want to add numbers? Click OK for Yes and cancel for NO"
  );
  if (numbers === true) {
    eligibleCharacters = eligibleCharacters.concat(number);
  }

  var symbols = window.confirm(
    "Do you want to add symbols? Click OK for Yes and cancel for NO"
  );
  if (symbol === true) {
    eligibleCharacters = eligibleCharacters.concat(symbol);
  }
  if (uppercase){
    
  }
  //todo check for at least one option

  var password = "";

  for (var i = 0; i <= passLength; i++) {
    var randomNumber = Math.floor(Math.random() * eligibleCharacters.length);
    password += eligibleCharacters(randomNumber + 1);
  }
// return the password that is generated

}

// function toDelete() {
//   password = [];
//   var passwordText = document.querySelector("#password");
//   const lower = "abcdefghijklmnopqrstuvwxyz";
//   const symbol = "!@#$%^&*() ";
//   const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const number = '0123456789';
//   var result = upper.concat(lower, symbol, number);

//   for (var i = 0; i <= passwordLength; i++) {
//     var randomNumber = Math.floor(Math.random() * chars.length);
//     password += chars.substring(randomNumber, randomNumber);
//   }

//   passwordText.value = password;
// }

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = eligibleCharacters;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// step 1 when the button is clicked a prompt will meet to user.-prompts can be found in the mini project.

// step 2 create confirms to give users options for whether or not to use letters symbols or number. refer to mini project. line 90

// step 3 create if/else statements in order to concat using arrays.

// step 4 define a var for the user to choose the length of the password.

// create a boolean prompt for each array
