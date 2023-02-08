// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  // Check that substitution alphabet contains all unique characters
  function isUnique(alphabet) {
    let checker = {};

    for (let i = 0; i < alphabet.length; i++) {
      const character = alphabet[i];

      // If the current character is already in the checker object, it is not unique - return false
      if (checker[character]) return false;

      // Add current character to checker object
      checker[character] = true;
    }

    // If this line is reached, all characters are unique
    return true;
  }

  function encodeString(input, alphabet) {
    let encodedString = "";

    // Loop through each character in the input
    for (let i = 0; i < input.length; i++) {
      const currentChar = input[i];
      
      // Check if the current character is a space, and add to string if so
      if (currentChar === " ") encodedString += " ";
      
      // Otherwise, find the encoded letter that matches to the current letter, and add to the string
      else {
        for (regularLetter in alphabet) {
          if (regularLetter === currentChar) {
            const codeLetter = alphabet[regularLetter];
            encodedString += codeLetter;
            break;
          }
        }
      }
    }

    return encodedString;
  }

  // Functions in the same way as the encode function, EXCEPT...
  function decodeString(input, alphabet) {
    let decodedString = "";

    for (let i = 0; i < input.length; i++) {
      const currentChar = input[i];

      if (currentChar === " ") decodedString += " ";
      else {
        for (regularLetter in alphabet) {
          // If the VALUE of the regular alphabet letter in the alphabet object matches the current character, 
          // add the regular alphabet letter to the string
          if (alphabet[regularLetter] === currentChar) {
            decodedString += regularLetter;
            break;
          }
        }
      }
    }

    return decodedString;
  }

  function substitution(input, alphabet, encode = true) {
    // Error handling - if no alphabet, or alphabet is too short/long, or does not contain unique characters, return false
    if (!alphabet || alphabet.length !== 26 || !isUnique(alphabet)) {
      return false;
    }

    // Create encoded alphabet object to match each letter in the regular alphabet (key) to the substitution alphabet (value)
    const regularAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let encodedAlphabet = {};
    for (let i = 0; i < 26; i++) {
      encodedAlphabet[regularAlphabet[i]] = alphabet[i];
    }

    let returnString = "";

    // Send lower case input and encoded alphabet object to the relevant helper function
    if (encode) returnString = encodeString(input.toLowerCase(), encodedAlphabet);
    else returnString = decodeString(input.toLowerCase(), encodedAlphabet);

    return returnString;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
