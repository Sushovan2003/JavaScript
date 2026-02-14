// ======================================
// JavaScript String Methods Demo
// ======================================

// Strings are immutable in JavaScript.
// Any transformation returns a NEW string,
// the original string remains unchanged.


// --------------------------------------
// Basic String Access
// --------------------------------------

let message = "Hello, buddy";

// Access character by index (0-based)
console.log(message[0]); // "H"

// Length includes spaces and punctuation
console.log(message.length);

// Direct length usage
console.log("Abc".length); // 3


// --------------------------------------
// Case Conversion
// --------------------------------------

// Convert to uppercase
let upperCaseWord = message.toUpperCase();
console.log(upperCaseWord);

// Convert to lowercase
let lowerCaseWord = message.toLowerCase();
console.log(lowerCaseWord);

// Original string remains unchanged
console.log(message);


// --------------------------------------
// Trimming Spaces
// --------------------------------------

const line = "   I am   Sushovan    ";

// Remove spaces from beginning
console.log(line.trimStart());

// Remove spaces from end
console.log(line.trimEnd());

// Remove spaces from both ends
console.log(line.trim());

// Chained trimming (same as trim())
console.log(line.trimStart().trimEnd());


// --------------------------------------
// Searching & Replacing
// --------------------------------------

// indexOf returns position or -1 if not found
console.log(message.indexOf("s"));

// Replace first matching substring
console.log(line.replace("I am", "My name"));


// --------------------------------------
// Combining Strings
// --------------------------------------

// concat joins strings
console.log(message.concat(line));


// --------------------------------------
// Padding & Formatting
// --------------------------------------

let lastFourDigits = "3364";

// Masking account number with padding
console.log(
  `Masked account number: ${lastFourDigits.padStart(16, "*")}`
);

// Template literal formatting
let bankBalance = "5500";
console.log(`I have $${bankBalance} in my account.`);


// --------------------------------------
// Character Access Method
// --------------------------------------

// charAt without index defaults to 0
console.log(message.charAt()); // "H"


// --------------------------------------
// Key Learning Notes
// --------------------------------------

/*
1. Strings are immutable — operations return new strings.
2. trim() removes outer spaces, not internal spacing.
3. indexOf() helps locate characters/substrings.
4. replace() affects only the first match.
5. padStart()/padEnd() are useful for formatting or masking.
6. Template literals improve readability.
*/
