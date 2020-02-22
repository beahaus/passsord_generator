// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

  // arrays of characters available
  var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z" , "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z"];
  
  var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  var specialChar = ["/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", "."];
  // arrays of characters available

  // Shuffle lowerAlpha array
  var charFromLowerAlpha = lowerAlpha.sort(() => Math.random() - 0.5 );

  // Shuffle upperAlpha array
  var charFromUpperAlpha = upperAlpha.sort(() => 0.5 - Math.random()); 

  // Shuffle specialChar array
  var charFromSpecialChar = specialChar.sort(() => Math.random() - 0.5 );

  function generatePassword() {

    var charCount = prompt("Pick the character length from 8-128");

    // error if incorrect number of characters is input
    if (charCount < 8 || charCount > 128) {

      alert("ERROR: Must input a number between 8 and 128 to generate password. Try Again.");

      System.exit(0); 
    }
    // error if incorrect number of characters is input

    // confirms which characters to include
    var yesLower = confirm("Do you want to include lowercase letters?");

    var yesUpper = confirm("Do you want to include uppercase letters?");

    var yesSpecial = confirm("Do you want to include special characters?");
    // confirms which characters to include
    
    // alert if no character types are selected
    if (yesLower === false && yesUpper === false && yesSpecial === false) {
      alert("ERROR: At least one character type must be selected. Try Again.");
      System.exit(0);
    }
    //alert if no character types are selected

    
    // all characters included
    if (yesLower === true && yesUpper === true && yesSpecial === true) {
 
      var charFromAllYesTogether = [...charFromLowerAlpha, ...charFromUpperAlpha, ...charFromSpecialChar];
      
      var charFromAllYesShuffled = charFromAllYesTogether.sort(() => 0.5 - Math.random());
  
      var passwordText= charFromAllYesShuffled.slice(0, charCount);

      console.log(passwordText);
    }
    // all characters included

    // only lowercase characters included
    else if (yesLower === true && yesUpper === false && yesSpecial === false) {

      var passwordText = charFromLowerAlpha.slice(0, charCount);

      console.log(passwordText);      
    }
    //only lowercase characters included

    // only uppercase characters included
    else if (yesLower === false && yesUpper === true && yesSpecial === false) {

      var passwordText = charFromUpperAlpha.slice(0, charCount);

      console.log(passwordText);
    }
    // only uppercase characters included

    // only special characters included
    else if (yesLower === false && yesUpper === false && yesSpecial === true) {

      var passwordText = [charFromSpecialChar.slice(0, charCount)];

      console.log(passwordText);
    }
    // only special characters included

    // lowercase and uppercase characters
    else if (yesLower === true && yesUpper === true && yesSpecial === false) {

      var yesLowerUpper = [...charFromLowerAlpha, ...charFromUpperAlpha];

      var yesLowerUpperShuffled = yesLowerUpper.sort(() => Math.random() - 0.5 );

      var passwordText = yesLowerUpperShuffled.slice(0, charCount);
      
      console.log(passwordText);
    }
    // lowercase and uppercase characters

    // lowercase and special characters
    else if (yesLower === true && yesUpper === false && yesSpecial === true) {

      var yesLowerSpecial = [...charFromLowerAlpha, ...charFromSpecialChar];

      var yesLowerSpecialShuffled = yesLowerSpecial.sort(() => 0.5 - Math.random());

      var passwordText = yesLowerSpecialShuffled.slice(0, charCount);

      console.log(passwordText);
    }
    // lowercase and special characters

    // uppercase and special characters
    else if (yesLower === false && yesUpper === true && yesSpecial === true) {

      var yesUpperSpecial = [...charFromUpperAlpha, ...charFromSpecialChar];

      var yesUpperSpecialShuffled = yesUpperSpecial.sort(() => Math.random() - 0.5);

      var passwordText = yesUpperSpecialShuffled.slice(0, charCount);

      console.log(passwordText);
    }
    // uppercase and special characters

    // generate final password text without separators and show it in the textbox
    var passwordText1= document.querySelector("#password");

    var passwordText2 = passwordText.join("");

    passwordText1.value = passwordText2;
    // generate final password text without separators and show it in the textbox
  }

generateBtn.addEventListener("click", generatePassword);
