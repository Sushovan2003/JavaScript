// ======================================
// JavaScript Variables & Function Demo
// (Hoisting + Type Conversion + Scope)
// ======================================


// --------------------------------------
// Block 1 — let vs var (Hoisting Demo)
// --------------------------------------

// Uncomment to experiment in debugger

// console.log(lastName);
// ❌ Would print: undefined
// Reason: `var` is hoisted and initialized as undefined

// console.log(firstName);
// ❌ Would throw ReferenceError
// Reason: `let` is hoisted but stays in the
// Temporal Dead Zone until initialized

let firstName = `Sushovan`;
var lastName = `Jana`;

console.log(firstName); // "Sushovan"
console.log(lastName);  // "Jana"


// --------------------------------------
// Block 2 — Variable + Function Usage
// --------------------------------------

// Global variable
var a = 2;

// Function declaration (fully hoisted)
function square(num) {
    return num * num;
}

// parseInt extracts numeric value from string
// Stops parsing when it hits a non-numeric character
var res1 = square(parseInt(`3j`));
// parseInt("3j") → 3 → square(3) → 9

var res2 = square(2);
// square(2) → 4

console.log(res1); // 9
console.log(res2); // 4


// --------------------------------------
// Key Learning Points
// --------------------------------------

/*
1. var variables are hoisted and initialized as undefined.
2. let variables are hoisted but remain in the Temporal Dead Zone.
3. Function declarations are fully hoisted.
4. parseInt reads numbers until invalid characters appear.
5. JavaScript performs implicit type conversion when needed.
*/
