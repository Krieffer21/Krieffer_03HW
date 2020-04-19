// Assignment Code

// assigning var generateBtn to the button on the html doc 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // prints an alert to the user about what to expect 
  var greeting= alert("Please answer the following promts to generate the desired criteria for your random passowrd!");
  
  // prompts the user for a password length, if the length is not between 8-128, they will be alerted and asked to try again.
  do { 
    var length= prompt("Please enter a number between 8-128 to determine how long you would like your password.");
    // Converts their string answer to an integer.
    var between= parseInt(length); 
    if (between <8 || between >128){
     alert ("Invalid response please try again!");
    }
  }
  while (between <8 || between >128);

  // Prompts the user for desired character types to be used in password, requires them to at least pick one.
  // Otherwise alert to try again and repeats the questions.
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

  // getting random password. 
  var password = generatePassword(lower,upper,numbers,special,between);
  // assigning var passwordText to the empty text box in the html.  
  var passwordText = document.querySelector("#password");
  // fills box with the randomly generated password.
  passwordText.value = password;
}

// inputting users preferences to generate a random password.  
function generatePassword(lc,uc,nbr,sp,plength){
  // defining the possible characters for their random password. 
  var num = "0123456789";
  var spc= " !\"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~";
  var up= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var low= "abcdefghijklmnopqrstuvwxyz";
  
  var select= "";
  var pword= "";
  
  // Take chosen criteria and use it to filter possible characters for password.  
  if (lc) {
    select= select + low;   
  }
  if (uc) {
    select= select + up;   
  }
  if (nbr) {
    select= select + num;   
  }
  if (sp) {
    select= select + spc;   
  }

  // generates random characters for desired password length. 
  for (var i = 0; i < plength; i++) {
    // gets random number between 0 and their desired password length.
    var ran = Math.floor(Math.random() * select.length);
    pword = pword + select.charAt(ran);
  }
  // returns password
  return pword;
}
// listens for the user to 'click' the button, generate password. 
generateBtn.addEventListener("click", writePassword);

