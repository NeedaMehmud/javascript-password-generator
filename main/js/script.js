// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var password = [];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate password
function generatePassword() {
  var requiredCharacterString = "";
  // password variation
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var nonAlphanumeric = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  // users are asked to select which type of password they would like to generate
  var characterLength = parseInt(prompt(
    "Welcome to password generator! \n How many characters would you like to have in your password?"
  ));

  if (!characterLength) {
    alert("The field can not be empty");
  } else if (characterLength < 8 || characterLength > 128) {
    characterLength.parseInt(prompt("Please submit a password between 8 and 128 characters."));
  }

  var numericalPassword = confirm("Do you want your password to contain numbers?");

  if (numericalPassword) {
    requiredCharacterString = requiredCharacterString + numeric;
    console.log(requiredCharacterString);
  }

  var specialCharacters = confirm("Do you want your password to contain special characters?");
  if (specialCharacters) {
    requiredCharacterString = requiredCharacterString + nonAlphanumeric;
  }

  var lowercasePassword = confirm("Do you want your password to contain uppercase letters?");
  if (lowercasePassword) {
    requiredCharacterString = requiredCharacterString + lowercase;
  }

  var uppercasePassword = confirm("Do you want your password to contain lowercase letters?");
  if (uppercasePassword) {
    requiredCharacterString = requiredCharacterString + uppercase;
  }

  for (var i = 0; i < characterLength; i++) {
    var passwordChar = requiredCharacterString[Math.floor(Math.random() * requiredCharacterString.length)];
    console.log(passwordChar);
  }

  return password;
}
