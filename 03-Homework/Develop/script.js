// Assignment Code
var generateBtn = document.querySelector("#generate");

// alert prompts go here

// when button pressed do this- fix it
  var generateBtn= alert("Please answer the following promts to generate the desired criteria for your random passowrd!")

// pass length 
  var name= prompt("Please enter a number between 8-128 to determine how long you would like your password.")
    // need something to validate a number was entered and it was between designated peramiters.


// character types
  var name =confirm("would you like lower case characters?")
  var name =confirm("Would you like upper case characters?")
  var name =confirm("Would you like any numbers in your password?")
  var name =confirm("Would you like any special characters in your password?")

// validate input so that at least 1 character type was selected otherwise promt them invalide input try again.
// validate input the user imput is correct and what they wanted

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// answer to promts go here 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// take imput and give output. 




// alert("Congratulations your random password is") + (password?))