// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var nonAlphanumeric = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
}

// Function to generate password
function generatePassword(){

  // onClick user should recieve this:
    var characterLength = window.prompt(
    "Welcome to password generator! \n How many characters would you like to have in your password?"
  );

  if (characterLength < 8 || characterLegth > 12) {
    window.alert("Please submit password between 8 to 12 characters.");
  } 
  
  if (characterLength > 8 || characterLength <12) {
    window.alert("Do you want uppsercase letters in your password?");
  } 


  return generatePassword;
}











// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
