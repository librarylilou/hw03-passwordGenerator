// constants for password criterias
const passwordText = document.querySelector("#password");
const passwordLength = document.querySelector("#length");
const passwordUpper = document.querySelector("#checkUpper");
const passwordLower = document.querySelector("#checkLower");
const passwordNumber = document.querySelector("#checkNumeric");
const passwordSpecial = document.querySelector("#checkSpecial");

const randomPass = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", () => {
  const hasLower = passwordLower.checked;
  const hasUpper = passwordUpper.checked;
  const hasNumber = passwordNumber.checked;
  const hasSpecial = passwordSpecial.checked;
  const length = +passwordLength.value;

  passwordText.password = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSpecial,
    length
  );
})

// Function generate password to the #password input

function generatePassword(lower, upper, number, special, length) {
  let generatePassword = '';
  const criteriaChecked = lower + upper + number + special;

  console.log("criteriaChecked:", criteriaChecked);
  // Array for criteria checking
  const criteriaArray = [{ lower }, { upper }, { number }, { special }].filter
    (
      item => Object.values(item)[0]
    );

  console.log("criteriaArray:", criteriaArray);
  // If none of the criteria boxes are checked
  if (criteriaChecked === 0) {
    return "";
  }

  // For-loop used to generate password
  for (let i = 0; i < length; i += criteriaChecked) {
    criteriaArray.forEach(type => {
      const writePassword = Object.keys(type)[0];

      generatePassword += randomPass[writePassword]();
    });
  }
  const thePassword = generatePassword.slice(0, length);

  return thePassword; 
};

// Functions for criteria--
// function for lower case
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// function for upper case
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// function for number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// function for special character
function getRandomSpecial() {
  const specials = '!@#$%^&*(){}[]+=<>?/';
  return specials[Math.floor(Math.random() * specials.length)];
}
