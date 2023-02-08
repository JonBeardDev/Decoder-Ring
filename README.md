# Decoder Ring Project

This project covers encoding and decoding messages in 3 different ciphers.

## Caesar Cipher

- Shifts each letter in the message forward (positive) or backward (negative) by the given shift value.
- Will not shift if a value outside of the length of the alphabet is given ( < -25 or > 26 ).
- Will not shift if no shift is included.
- Handles wrapping around the alphabet (z -> a or a -> z).
- Maintains spaces, punctuation, etc.


## Polybius Square

- Encodes each letter in the message to a 2-digit number
- Encodes/Decodes 42 as (i/j)
- Maintains spaces, punctuation, etc.

## Substitution cipher

- Substitutes each letter in the message with the corresponding letter in the entered substitute alphabet
- Will not accept substitute alphabets that are too long/short or contain non-unique characters
- Maintains spaces