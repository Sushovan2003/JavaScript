// ======================================
// JavaScript Browser Dialog Boxes Demo
// ======================================

// These dialog methods are provided by the browser (window object).
// They are mainly used for quick user interaction or debugging.


// --------------------------------------
// confirm()
// --------------------------------------

// Displays a dialog with OK and Cancel buttons.
// Returns:
// → true  if user clicks OK
// → false if user clicks Cancel

// const isConfirmed = confirm("Are you sure?");
// console.log(isConfirmed);


// --------------------------------------
// alert()
// --------------------------------------

// Displays a simple message box with only an OK button.
// It does NOT return a meaningful value (returns undefined).

// alert("Hi buddy!");


// --------------------------------------
// prompt()
// --------------------------------------

// Displays an input dialog box.
// Always returns user input as a STRING.
// Returns null if user presses Cancel.

let userInput = prompt("Enter anything...");
console.log(userInput);

// Example:
// If user enters 123 → output is "123" (string)
// Conversion is required if numeric operations are needed.


// --------------------------------------
// Key Notes
// --------------------------------------

/*
1. These dialogs pause script execution until user responds.
2. prompt() always returns string or null.
3. confirm() returns boolean.
4. alert() is used only for displaying messages.
5. Common in learning/debugging, less used in modern UI apps.
*/
