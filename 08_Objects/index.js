// Creating an object with multiple properties
// Includes nested object, special key names, and primitive values
const obj1 = {
    name: `Sushovan`,          // string property
    age: 22,                   // number property
    dob: `25/04/2003`,         // date stored as string

    // Nested object (object inside object)
    add: {
        dist: `Purba Medinipur`,
        state: `West Bengal`,
        country: `India`
    },

    // Keys with special characters must be written in quotes
    'is-Married': false,
    'phNo': 9330250635
};

// Accessing properties using dot notation
console.log(obj1.age);

// Accessing special key using bracket notation
// (dot notation won’t work because of hyphen)
console.log(obj1[`is-Married`]);

// Deleting a property from object
delete obj1.dob;


// ================= Object.seal() =================

// Object.seal() prevents:
// ❌ adding new properties
// ❌ deleting properties
// ✅ allows updating existing properties

Object.seal(obj1);

// Attempt to add new property → will fail silently
obj1.wifeName = `Anushka`;

// Updating existing property → allowed
obj1.age = 24;


// ================= Object.freeze() =================

// Object.freeze() makes object completely immutable
// ❌ cannot add
// ❌ cannot delete
// ❌ cannot update existing values

Object.freeze(obj1);

// Attempt to change value → ignored
obj1.age = 44;


// ================= "in" keyword =================

// Checks if a property exists in the object
// Returns true or false

console.log('age' in obj1); // true
