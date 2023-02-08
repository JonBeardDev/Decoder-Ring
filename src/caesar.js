// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  // Assign each letter of the alphabet a zero-indexed value that can be used throughout the functions
  const alphabet = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };
  // Add each letter of the alphabet in order to an array
  const alphaArr = Object.keys(alphabet);

  function encodeString(input, shift) {
    let encodedString = "";

    // Loop through each character in the string
    for (let i = 0; i < input.length; i++) {
      const letter = input[i];

      // If the current character is NOT alphabetic (i.e space or punctuation), add to the string without encoding
      if (!alphaArr.includes(letter)) encodedString += letter;
      // Otherwise, encode the letter
      else {
        // Pull the zero-indexed value of the letter from the alphabet object
        const letterValue = alphabet[letter];

        // Add the shift value to the zero-indexed value
        let encodedValue = letterValue + shift;
        // If the new value takes the new letter past z, subtract 26 to return to a
        if (encodedValue > 25) encodedValue -= 26;
        // Or, opposite if the shift takes it past a, add 26 to move to z
        else if (encodedValue < 0) encodedValue += 26;

        // Find the encoded letter using the indexing in the array, and add to the encoded string
        encodedString += alphaArr[encodedValue];
      }
    }
    return encodedString;
  }

  // Functions exactly the same as the encode array EXCEPT...
  function decodeString(input, shift) {
    let decodedString = "";

    for (let i = 0; i < input.length; i++) {
      const letter = input[i];
      if (!alphaArr.includes(letter)) decodedString += letter;
      else {
        const letterValue = alphabet[letter];

        // Rather than add the shift, subbtract to reverse the encoding.
        let encodedValue = letterValue - shift;
        if (encodedValue > 25) encodedValue -= 26;
        else if (encodedValue < 0) encodedValue += 26;

        decodedString += alphaArr[encodedValue];
      }
    }
    return decodedString;
  }

  function caesar(input, shift, encode = true) {
    // Return false if error in shift value
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    let returnString = "";
    // If encode is true, encode the string. Otherwise decode the string
    // Send lower case version of input to helper functions
    if (encode) returnString = encodeString(input.toLowerCase(), shift);
    else returnString = decodeString(input.toLowerCase(), shift);

    return returnString;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
