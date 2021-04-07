// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//WHEN I click the button to generate a password a popup window is displayed
function criteriaLower() {
  var checkBox = document.getElementById("checkLower");
  if (checkBox.checked == true) {
      text.style.display = "block";
 } else {
       text.style.display = "none";
   }
};
function criteriaUpper() {
  var checkBox = document.getElementById("checkUpper");
  if (checkBox.checked == true) {
      text.style.display = "block";
 } else {
       text.style.display = "none";
   }
};
function criteriaNumeric() {
  var checkBox = document.getElementById("checkNumeric");
  if (checkBox.checked == true) {
      text.style.display = "block";
 } else {
       text.style.display = "none";
   }
};
function criteriaSpecial() {
  var checkBox = document.getElementById("checkSpecial");
  if (checkBox.checked == true) {
      text.style.display = "block";
 } else {
       text.style.display = "none";
   }
};
//THEN I am presented with a series of prompts for password criteria
var criteria = function(){
  console.log ("Select below the criteria you'd like to include in your password :)")
}
criteria();

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
