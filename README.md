# Krieffer_03HW

## 03 JavaScript: Password Generator
  This homework we were asked to create an application that generates a random password based on the criteria selected by the user. 
  
  ### Asking for Password Length
  This do while loop promts the user to input their desired password length. If they pick a number that it not between 8-128 it will alert them to, 'try again!' until they pick a number within the defined criteria. 

![alt text](https://github.com/Krieffer21/Krieffer_03HW/blob/master/03-Homework/Assets/ScreenShots/parseInt.png)

### Asking for Character Type Criteria
   This do while loop is where I ask for the users criteria for the password. In the screenshot below are the alerts that confirm what criteria the user would like in their password. If they do not pick any of the criteria it will alert them to 'try again', until they choose one of the criteria.  

![alt text](https://github.com/Krieffer21/Krieffer_03HW/blob/master/03-Homework/Assets/ScreenShots/doWhile.png)

### Special Characters
  The screenshot below shows the defined variables for the character types as asked for in the acceptance criteria. The special characters listed in the variable 'spc' are escaped by using the backslash, \. The backslash means to escape, not close the argument but rather make it a character. This way when generating the random password, if chosen, the special characters can be picked from the string and used as a character.    
  
![alt text](https://github.com/Krieffer21/Krieffer_03HW/blob/master/03-Homework/Assets/ScreenShots/SpecCharacters.png)

### charAt
  The code shown in the screenshot below is used to randomly generate a password with the length input by the user. The last line uses 'select.charAt(ran)' as a method for calling the character at the designated index. In other words, it gets the character at index 0-9. 

![alt text](https://github.com/Krieffer21/Krieffer_03HW/blob/master/03-Homework/Assets/ScreenShots/charAt.png)

### Password Generator Gif
  The gif below shows what the user will see when using the random password generator. As you can see the user is altered the various prompts based on the criteria they choose from. If they do not input a valid response they will be alerted to 'try again!', until they input a valid response.
  
![](https://github.com/Krieffer21/Krieffer_03HW/blob/master/03-Homework/Assets/ScreenShots/RandomPassword.gif)
  
  
