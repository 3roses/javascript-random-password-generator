// Assignment Code
var generateBtn = document.querySelector("#generate");


var allowUppercase;       // allow Uppercase Provided by instructor
var allowLowercase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount;
var numCharPass;

var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowercaseChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "|", "\\", "}", "{", "]", "[", '"', "'", ":", ";", "/", "?", ".", ">", ",", "<", "`", "~"];
var chosenChars = []


function askAboutUppercase(){
  allowUppercase = confirm("Are upper case characters allowed?");  // askAboutUppercase Provided by instructor
  if (allowUppercase) {
    chosenChars = chosenChars.concat(uppercaseChars)
  }
  console.log(allowUppercase);
}

function askAboutLowercase(){
  allowLowercase = confirm("Are lower case characters allowed?");
  if (allowLowercase) {
    chosenChars = chosenChars.concat(lowercaseChars)
  }
  console.log(allowLowercase);
}

function askAboutNumbers(){
  allowNumbers = confirm("Are numbers allowed?");
  if (allowNumbers) {
    chosenChars = chosenChars.concat(numbers)
  }
  console.log(allowNumbers);
}

function askAboutSpecials(){
  allowSpecials = confirm("Are special characters allowed?");
  if (allowSpecials) {
    chosenChars = chosenChars.concat(specials)
  }
  console.log(allowSpecials);
}

// Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.



// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
function generatePassword(){
  var finalResult = ""

  if (numCharPass >= 8 && numCharPass <= 128){                       // The function will return a password only if it is 8-128 characters long
    
  for(var i = 0; i < numCharPass; i++){
    
      var index = Math.floor(Math.random()*chosenChars.length)
      var randomChar = chosenChars[index]
      finalResult = finalResult.concat(randomChar)
    }
  }

  else {
    window.prompt("Password must be 8-128 characters long. \nPlease click 'Generate Password' and try again.")
  }
  
  // HINT: Remember that a for-loop can iterate from a starting number to a ending number, such as the number of characters in a password.

  // HINT: You may want to look into merging arrays together

  return finalResult;
}

// Write password to the #password input
function writePassword() {

  numCharPass = window.prompt("Between 8-128, how many characters would you like in your password?: ");
  
  if (numCharPass < 8 || numCharPass > 128){
    window.prompt("Password must be 8-128 characters long")
  }

  alert("Your password will be " + numCharPass + " characters long");



  // ask the questions first
  askAboutUppercase();
  askAboutLowercase();
  askAboutNumbers();
  askAboutSpecials();

  numCharPass =  parseInt(numCharPass);
  console.log(typeof numCharPass)

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);