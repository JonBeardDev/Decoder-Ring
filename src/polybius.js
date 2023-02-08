// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  // Make object of alphabet objects with letter and polybius value
  const alphabet = {
    a: { letter: "a", value: "11" },
    b: { letter: "b", value: "21" },
    c: { letter: "c", value: "31" },
    d: { letter: "d", value: "41" },
    e: { letter: "e", value: "51" },
    f: { letter: "f", value: "12" },
    g: { letter: "g", value: "22" },
    h: { letter: "h", value: "32" },
    i: { letter: "i", value: "42" },
    j: { letter: "j", value: "42" },
    k: { letter: "k", value: "52" },
    l: { letter: "l", value: "13" },
    m: { letter: "m", value: "23" },
    n: { letter: "n", value: "33" },
    o: { letter: "o", value: "43" },
    p: { letter: "p", value: "53" },
    q: { letter: "q", value: "14" },
    r: { letter: "r", value: "24" },
    s: { letter: "s", value: "34" },
    t: { letter: "t", value: "44" },
    u: { letter: "u", value: "54" },
    v: { letter: "v", value: "15" },
    w: { letter: "w", value: "25" },
    x: { letter: "x", value: "35" },
    y: { letter: "y", value: "45" },
    z: { letter: "z", value: "55" },
  };
  // Make array of letters to ensure non-alphabetic characters are handled correctly
  const alphaArr = Object.keys(alphabet);

  // Make array of single numbers used in polybius to ensure non-numeric characters are handled correctly
  const numberArr = ["1", "2", "3", "4", "5"];

  function encodeString(input) {
    let encodedString = "";

    // Loop through each letter in the string
    for (let i = 0; i < input.length; i++) {
      const letter = input[i];

      // For non-alphabetic letters, add current character to encoded string
      if (!alphaArr.includes(letter)) encodedString += letter;
      else {
        for (let letters in alphabet) {
          const currentLetter = alphabet[letters];
          // Find the letter in the alphabet object, and add the corresponding value to the encoded string
          if (currentLetter.letter === letter) {
            encodedString += currentLetter.value;
            break;
          }
        }
      }
    }
    return encodedString;
  }

  function decodeString(input) {
    let decodedString = "";

    // Loop through each character in the string
    for (let i = 0; i < input.length; i++) {
      let number = input[i];

      // If the current character is NOT a number (such as a space), add it to the decoded string
      if (!numberArr.includes(number)) decodedString += number;
      // If we have made it to the final character and it is numeric, then a pair can't be made - return false
      else if(i === input.length - 1) return false;
      // Otherwise, decode the number pair
      else {
        // Append the next character to make a 2 digit pair
        number += input[i + 1];

        // If the pair is 42, add (i/j) to the decoded string
        if (number === "42") {
          decodedString += "(i/j)";
          // Skip the second character in this pair to move to the following character
          i++;
        }
        // Otherwise, find the correct letter for the number pair and skip to the following character
        else {
          for (let letter in alphabet) {
            const currentLetter = alphabet[letter];
            if (currentLetter.value === number) {
              decodedString += currentLetter.letter;
              i++;
              break;
            }
          }
        }
      }
    }
    return decodedString;
  }

  function polybius(input, encode = true) {
    let returnString = "";

    // If encode is true, encode the lower case of the string. If false, decode it.
    if (encode) returnString = encodeString(input.toLowerCase());
    else returnString = decodeString(input.toLowerCase());

    return returnString;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
