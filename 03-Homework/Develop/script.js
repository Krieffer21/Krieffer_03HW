
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

  var password = generatePassword(lower,upper,numbers,special,between);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(lc,uc,nbr,sp,plength){
  var num = "0123456789";
  var spc= " !\"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~";
  var up= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var low= "abcdefghijklmnopqrstuvwxyz";
  var select= "";
  var pword= "";

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

  for (var i = 0; i < plength; i++) {
    var ran = Math.floor(Math.random() * select.length);
    pword = pword + select.charAt(ran);
  }
  return pword;
}

generateBtn.addEventListener("click", writePassword);

