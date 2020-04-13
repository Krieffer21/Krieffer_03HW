
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var greeting= alert("Please answer the following promts to generate the desired criteria for your random passowrd!");
  do { 
    var length= prompt("Please enter a number between 8-128 to determine how long you would like your password.");
    var between= parseInt(length); 
    if (between <8 || between >128){
     alert ("Invalid response please try again!");
    }
  }
  while (between <8 || between >128);
  
  do {
    var lower =confirm("Would you like lower case characters?");
    var upper =confirm("Would you like upper case characters?");
    var numbers =confirm("Would you like any numbers in your password?");
    var special =confirm("Would you like any special characters in your password?");
    if (!(lower||upper||numbers||special)){
      alert ("Invalid response, you must say yes to one of the character types. Please try again!"); 
    }
  }
  while (!(lower||upper||numbers||special));

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){

}
// answer to promts go here 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// validate input so that at least 1 character type was selected otherwise promt them invalide input try again.
// validate input the user imput is correct and what they wanted

// take imput and give output. 




// alert("Congratulations your random password is") + (password?))