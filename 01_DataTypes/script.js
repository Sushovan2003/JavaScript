// ===============================
// JavaScript Type Conversion Demo
// ===============================

// ---------- NUMBER ----------

// typeof returns the data type of a value
console.log(typeof 100);      // number → integer value
console.log(typeof 12.885);   // number → floating-point value


// ---------- STRING ----------

// Strings can be created using single quotes, double quotes, or backticks
console.log(typeof 'Hello');  // string
console.log("Sushovan");      // prints string value
console.log(typeof `Jana`);   // string → template literal (supports interpolation & multi-line)


// ---------- STRING → NUMBER CONVERSION ----------

// Unary plus (+) converts a string into a number
console.log(typeof +'100');    // number
console.log(typeof +"100");    // number
console.log(typeof +`1000`);   // number

// When adding number + string → result becomes string (concatenation)
console.log(100 + `200`);      // "100200"

// Explicit numeric conversion prevents concatenation
console.log(100 + +`200`);     // 300

// Unary minus converts string to negative number
console.log(-'300' + 100);     // -200


// ---------- parseInt BEHAVIOR ----------

// parseInt extracts number from string (if possible)
console.log(parseInt('tt300a'));        // NaN → invalid numeric start
console.log(typeof parseInt('yyut200a')); // number → NaN is still type number


// ---------- NUMBER → STRING CONVERSION ----------

// Adding empty string converts number to string
console.log(typeof (100 + "")); // string


// ---------- BOOLEAN ----------

// Boolean values
console.log(typeof true);   // boolean
console.log(typeof false);  // boolean

// Boolean numeric coercion
console.log(-true);   // -1
console.log(+true);   // 1
console.log(-false);  // -0
console.log(+false);  // 0

// Boolean participates in arithmetic operations
console.log(1 + +true); // 2


// ---------- UNDEFINED ----------

// undefined represents absence of value
console.log(typeof undefined); // undefined

// Converting undefined to number results in NaN
console.log(typeof +undefined); // number (NaN)

// parseInt with invalid input returns NaN
console.log(typeof parseInt('jjhh' + undefined + '')); // number
console.log(parseInt('jjj' + undefined));              // NaN
console.log(parseInt(undefined + " "));                // NaN
