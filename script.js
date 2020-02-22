// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {

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

    // confirms which characters to include
    var yesLower = confirm("Do you want to include lowercase letters?");
    var yesUpper = confirm("Do you want to include uppercase letters?");
    var yesSpecial = confirm("Do you want to include special characters?");
    // confirms which characters to include
    // error if incorrect number of characters is input
    if (charCount < 8) {
      alert("ERROR: Must input a number between 8 and 128 to generate password.");
    }
    if (charCount > 128) {
      alert("ERROR: Must input a number between 8 and 128 to generate password.");
    }
    // error if incorrect number of characters is input

    // alert if no character types are selected
    if (yesLower === false && yesUpper === false && yesSpecial === false) {
      alert("ERROR: At least one character type must be selected.");
    }
    //alert if no character types are selected

    
    
    if (yesLower === true && yesUpper === true && yesSpecial === true) {
 
      var charFromAllYesTogether = [...charFromLowerAlpha, ...charFromUpperAlpha, ...charFromSpecialChar];
      
      var charFromAllYesShuffled = charFromAllYesTogether.sort(() => 0.5 - Math.random());
  
      var allYesPassword = [charFromAllYesShuffled.slice(0, charCount)];
      console.log(allYesPassword);
    }
    else if (yesLower === true && yesUpper === true && yesSpecial === false) {
      var yesLowerUpper = [...charFromLowerAlpha, ...charFromUpperAlpha];
      var yesLowerUpperShuffled = yesLowerUpper.sort(() => Math.random() - 0.5 );
      var yesLowerUpperPassword = [yesLowerUpperShuffled.slice(0, charCount)];
      console.log(yesLowerUpperPassword);
    }
    else if (yesLower === true && yesUpper === false && yesSpecial === true) {
      var 
    }

    
    
    
 
    
  
    
  }
  
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
