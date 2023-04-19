// Assignment code here
var userEntry = "";
var compEntry = "";
var randomPass = "";
var displayMessage = "";
var minlength = 8;
var maxlength = 16;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
var passwordLength = 12;
var password = '';

// Write password to the #password input
function writePassword() {
  var password = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 const arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 const arraySymbol = ["! @ # $ % ^ & * ( )"];
 const arrayUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 const arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var arrayAll = arrayUpper.concat(arrayLower, arraySymbol, arrayNumber);
  var result = (Math.random() + 1).toString(36) .substring(15);
  for (var i = 1; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber);
  }


   var userEntry = window.prompt('Choose your password length')
  if (userEntry < 8) {
    alert('Password must be at least 8 characters!') 
    return;
  }

    
  if (userEntry > 128) {
    alert('Password cannot be greater than 128 characters!') 
    return;
    
  }
   console.log(userEntry);
  
   var upper = window.prompt("Do you want uppercase letters?")
  if ((upper !== "Y")||(upper !== "N")) {
    
  }

  
  var lower = window.prompt("Do you want lowercase letters?")
  if ((lower !== "Y")||(lower !== "N")) {
    
  }
  var numbers = window.prompt("Do you want to add numbers?")
  if ((numbers !== "Y")||(numbers !== "N")) {
    
  }
  var symbols = window.prompt("Do you want to add symbols?")
  if ((symbols !== "Y")||(symbols !== "N")) {
    
  }
  console.log(result);
  onclick =option();

  function option() {
    var choose =confirm('Are you sure?');
    if (choose == false) {
      event.preventDefault;
    }
    
  }
 
  passwordText.value = (result);
}
  
function generatePassword() {
  var passwordText = document.querySelector("#password");

  
}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



// step 1 when the button is clicked a prompt will meet to user.-prompts can be found in the mini project.

// step 2 create confirms to give users options for whether or not to use letters symbols or number. refer to mini project. line 90

// step 3 create if/else statements in order to concat using arrays.

// step 4 define a var for the user to choose the length of the password.

// create a boolean prompt for each array 