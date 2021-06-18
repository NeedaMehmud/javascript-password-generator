// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function createPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

  this.addEventListener("click", function () {
    passwordText = generatePassword();
  });
} 


// Function to generate password
function generatePassword(){
  // password variation
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var nonAlphanumeric = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var numericalPassword;
  var specialCharacters;
  var lowercasePassword;
  var uppercasePassword;
  var characterLength;

  // users are asked to select which type of password they would like to generate
    var startGeneratingPassword = parseInt(prompt(
    "Welcome to password generator! \n How many characters would you like to have in your password?"
    ));

    if (!startGeneratingPassword) {
      alert("The field can not be empty");

  if (characterLength < 8 || characterLegth > 128) {
    window.alert("Please submit a password between 8 and 128 characters.");
  } 
  else {
    numericalPassword = confirm("Do you want your password to contain numbers?");
    specialCharacters = confirm("Do you want your password to contain special characters?");
    lowercasePassword = confirm("Do you want your password to contain uppercase letters?");
    uppercasePassword = confirm("Do you want your password to contain lowercase letters?");
  };

  return generatePassword;
}
}











// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
