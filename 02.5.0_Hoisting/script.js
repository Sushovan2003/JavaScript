// ======================================
// JavaScript Hoisting Demonstration
// ======================================

// Hoisting = JavaScript moves declarations to the top
// of their scope during the memory creation phase.

// At this point:
// → function getName is fully hoisted (entire function)
// → variable x is hoisted but initialized as undefined

console.log(getName);
// Output: function definition
// Reason: Function declarations are completely hoisted

console.log(x);
// Output: undefined
// Reason: Only the variable declaration is hoisted,
// not the assignment

// Variable declaration + initialization
var x = 7;

// Function declaration
function getName() {
    console.log("Hey I am Sushovan.");
}

// After initialization
console.log(getName);
// Output: function definition (still unchanged)

console.log(x);
// Output: 7
// Reason: x is now assigned

// Function invocation
getName();
// Output: Hey I am Sushovan.



// ======================================
// Additional Hoisting Examples
// ======================================

// Example 1: Accessing variable before declaration
console.log(y); // undefined (not an error due to hoisting)
var y = 10;


// Example 2: Function expression hoisting behavior
console.log(sayHello);
// Output: undefined
// Reason: Only variable declaration is hoisted

var sayHello = function () {
    console.log("Hello!");
};

// sayHello(); // Uncommenting works AFTER assignment
