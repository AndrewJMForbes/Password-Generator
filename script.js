// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"



// Write password to the #password input
function generatePassword() {
 var password = [];
 const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 const symbol = ["! @ # $ % ^ & * ( )"];
 const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var combinedChars = upper.concat(lower, symbol, number);
  


   var passLength = window.prompt('Choose your password length')
  if (passLength < 8) {
    alert('Password must be at least 8 characters!') 
    return;
  }

    
  if (passLength > 128) {
    alert('Password cannot be greater than 128 characters!') 
    return;
    
  }

  
   var uppercase = window.confirm("Do you want uppercase letters? Click OK for Yes and cancel for NO")
     if (uppercase === true){
      password = password.concat(upper);
   }


  var lowercase = window.confirm("Do you want lowercase letters? Click OK for Yes and cancel for NO")
  if (lowercase === true){
    password = password.concat(lower);
 }
 
  var numbers = window.confirm("Do you want to add numbers? Click OK for Yes and cancel for NO")
  if (numbers === true){
    password = password.concat(number);
 }
 
  var symbols = window.confirm("Do you want to add symbols? Click OK for Yes and cancel for NO")
  if (symbol === true){
    password = password.concat(symbol);
 }
    
    for (var i = 0; i <= passLength; i++) {
      var randomNumber = Math.floor(Math.random() * password.length);
      password += chars.substring(randomNumber, randomNumber);
    }
  }
 

  
function toDelete() {
  var passwordText = document.querySelector("#password");
 const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 const symbol = ["! @ # $ % ^ & * ( )"];
 const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var result = upper.concat(lower, symbol, number);

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber);
  }
  
  
  passwordText.value = (password);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



// step 1 when the button is clicked a prompt will meet to user.-prompts can be found in the mini project.

// step 2 create confirms to give users options for whether or not to use letters symbols or number. refer to mini project. line 90

// step 3 create if/else statements in order to concat using arrays.

// step 4 define a var for the user to choose the length of the password.

// create a boolean prompt for each array 