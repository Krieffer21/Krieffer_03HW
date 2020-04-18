# Krieffer_03HW
## 03 JavaScript: Password Generator
  This homework we were asked to create an application that generates a random password based on the criteria selected by the user. 

### parseInt
  The block of code shown below, after alerting the user, it prompts them to input a number between the defined perameters. When defining the variable 'between', it takes the length and makes it an integer so we can do calculations. 'parseInt', converts a string into an integer which is helpfull for the do while loop to run efficiently and in defining the contition. 

![alt text](https://github.com/Krieffer21/Krieffer_03HW/blob/master/03-Homework/Assets/ScreenShots/parseInt.png)

### Special Characters
  The screenshot below shows the defined variables for the character types as asked for in the acceptance criteria. The special characters listed in the variable 'spc' are escaped by using the back slash, \. The back slash means to escape, not close the argument but rather make it a character. This way when generating the random password, if chosen, the special characters can be picked from the string and used as a character.    
  
![alt text](https://github.com/Krieffer21/Krieffer_03HW/blob/master/03-Homework/Assets/ScreenShots/specialCharacters.png)

### charAt
  The code shown in the screnshot below is used to randomly generate a password with the length input by the user. The last line uses 'select.charAt(ran)' as a method for calling the character at the designated index. In other words, it gets the charater at index 0-9. 

![alt text](https://github.com/Krieffer21/Krieffer_03HW/blob/master/03-Homework/Assets/ScreenShots/charAt.png)
