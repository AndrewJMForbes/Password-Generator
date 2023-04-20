// Assignment code here
var userEntry = "";
var compEntry = "";
var randomPass = "";
var displayMessage = "";
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
 const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 const symbol = ["! @ # $ % ^ & * ( )"];
 const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var combinedChars = upper.concat(lower, symbol, number);
  
  for (var i = 0; i <= passwordLength; i++) {
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
  
   var uppercase = window.confirm("Do you want uppercase letters? Click OK for Yes and cancel for NO")
   if (uppercase = true)


  var lowercase = window.confirm("Do you want lowercase letters? Click OK for Yes and cancel for NO")
 
  var numbers = window.confirm("Do you want to add numbers? Click OK for Yes and cancel for NO")
 
  var symbols = window.confirm("Do you want to add symbols? Click OK for Yes and cancel for NO")
  


    console.log(symbols);
    
  }
  
  // console.log(result);
  onclick =option();

  function option() {
    var choose =confirm('Are you sure about your choices?');
    if (choose == false) {
      userEntry = userEntry.concat(arrayAll);
      event.preventDefault;
    }
    
  }
 
  // passwordText.value = (result);

  
function generatePassword() {
  var passwordText = document.querySelector("#password");
  const arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const arraySymbol = ["! @ # $ % ^ & * ( )"];
  const arrayUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   var arrayAll = arrayUpper.concat(arrayLower, arraySymbol, arrayNumber);
  var result = (Math.random() * 2).toString(36) .substring(10);
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber);
  }
  
  
  passwordText.value = (result);
}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



// step 1 when the button is clicked a prompt will meet to user.-prompts can be found in the mini project.

// step 2 create confirms to give users options for whether or not to use letters symbols or number. refer to mini project. line 90

// step 3 create if/else statements in order to concat using arrays.

// step 4 define a var for the user to choose the length of the password.

// create a boolean prompt for each array 