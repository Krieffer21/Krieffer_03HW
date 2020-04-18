# Krieffer_03HW
## 03 JavaScript: Password Generator
  This homework we were asked to create an application that generates a random password based on the criteria selected by the user. 

### Do While Loop
   The do while loop is efficient for this assignment because it says preform, this, then check the condition. In the screen shot below the 'this' I refered to are the alerts that confirm what criteria the user would like in their password. If they do not pick any of the criteria it will alert them to 'try again', until they chose one of the criteria the loop will keep running, until the condition (while) is false. 

![alt text](https://github.com/Krieffer21/Krieffer_03HW/blob/master/03-Homework/Assets/ScreenShots/doWhile.png)

### parseInt
  The block of code shown below, after alerting the user, it prompts them to input a number between the defined perameters. When defining the variable 'between', it takes the length and makes it an integer so we can do calculations. 'parseInt', converts a string into an integer which is helpfull for the do while loop to run efficiently and in defining the contition. 

![alt text](https://github.com/Krieffer21/Krieffer_03HW/blob/master/03-Homework/Assets/ScreenShots/parseInt.png)

### Special Characters
  The screenshot below shows the defined variables for the character types as asked for in the acceptance criteria. The special characters listed in the variable 'spc' are escaped by using the back slash, \. The back slash means to escape, not close the argument but rather make it a character. This way when generating the random password, if chosen, the special characters can be picked from the string and used as a character.    
  
![alt text](https://github.com/Krieffer21/Krieffer_03HW/blob/master/03-Homework/Assets/ScreenShots/specialCharacters.png)

### charAt
  The code shown in the screnshot below is used to randomly generate a password with the length input by the user. The last line uses 'select.charAt(ran)' as a method for calling the character at the designated index. In other words, it gets the character at index 0-9. 

![alt text](https://github.com/Krieffer21/Krieffer_03HW/blob/master/03-Homework/Assets/ScreenShots/charAt.png)

### Password Generator Gif
  The gif below shows what the user will see when using the random password generator. As you can see the user is altered the various prompts based on the criteria they choose from. If they do not input a valid response they will be alerted to 'try again!', until they input a vaild response.
  
  
