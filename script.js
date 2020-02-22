// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
  
  function generatePassword() {

    var charCount = prompt("Pick the character length from 8-128");

    // confirms the number entered is between 8 and 128
    if (charCount < 8) {
      alert("Must input a number between 8 and 128 to generate password");
    }
    if (charCount > 128) {
      alert("Must input a number between 8 and 128 to generate password");
    }
    // confirms the number entered is between 8 and 128

    // arrays of characters available
    var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z" , "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z"];
    var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var specialChar = ["/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", ".", "/", "!", "-", "_", "@", "#", "$", "^", "&", "(", ")", "<", ">", "."];
    // arrays of characters available
   
    // confirms which characters to include
    var yesLower = confirm("Do you want to include lowercase letters?");
    var yesUpper = confirm("Do you want to include uppercase letters?");
    var yesSpecial = confirm("Do you want to include special characters?");
    // confirms which characters to include
    
  //  var howMany = (Math.floor(charCount/3));
    
     // Shuffle lowerAlpha array
     const sortLowerAlpha = lowerAlpha.sort(() => 0.5 - Math.random());
     // Get sub-array of lowerAlpha elements after shuffled
     let charFromLowerAlpha = [lowerAlpha.slice(0, charCount)];
     console.log(charFromLowerAlpha);
 
    // Shuffle upperAlpha array
    const sortUpperAlpha = upperAlpha.sort(() => 0.5 - Math.random());
    // Get sub-array of upperAlpha elements after shuffled
    let charFromUpperAlpha = [upperAlpha.slice(0, charCount)];
    console.log(charFromUpperAlpha);
  
    // Shuffle specialChar array
    const sortSpecialChar = specialChar.sort(() => 0.5 - Math.random());
    // Get sub-array of specialChar elements after shuffled
    let charFromSpecialChar = [specialChar.slice(0, charCount)];
    console.log(charFromSpecialChar);
  }
  
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
