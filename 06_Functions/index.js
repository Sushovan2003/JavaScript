// Function declaration
function add() {
    console.log("It's function declaration.");
}

// Function expression
let fun = function () { 
    console.log("It's function expression.");
};

// Fat arrow function
let arrowFun = () => {
    console.log("Its arrow function");
    console.log("Hey buddy");
}
arrowFun()

// Parameter & Arguments
function dance(message) {
    console.log(`${message}, dancing...`);
}
dance(`Ghoda`)
dance(`Gadha`)

// Method overloading
function add(v1) {
    console.log(v1 + 0);
}
function add(v1, v2) {
    console.log(v1 + v2);
}
add(3)
add(2, 4)

// Default parameter : If we don't provide value then default parameter will be given
function sub(value1 = 0, value2 = 0) {
    console.log(value1 - value2);
}
sub() // 0
sub(3) // 3
sub(4, 3) // 1

// Rest operator
function mul(a, b, c, ...val) {
    console.log(a, b, c, val);
    console.log(val, a, b, c);
}
mul(3, 4, 8, 7, 5, 3, 4, 2, 5)
mul(4, 5)
mul(1, 3, 4, 6)

// First Class Function : We can treat function like a varaible...
function call(val) {
    val() // Invoking the function inside the call() function
}
call(function() {
    console.log(`hey I am called`);
})

// Higher order function..
function higherOrderFunct(val1, val2) {
    let val3 = val1 + val2
    return function x(innerVal3 = val3) {
        console.log("Returns function " + innerVal3);
    }
}

higherOrderFunct(45, 6)()

funExpression()
// console.log(funEx2());
// funEx2()

function funExpression() {
    console.log(`Hey I am FunExp...`);
}

var funEx2 = function () { 
    console.log("It's function expression.");
};
funEx2()

let arr = [1, 2, 3, 4, 5]
console.log(arr.join(" "));// 1 2 3 4 5

arr.forEach(function(num) {
    console.log(num);
}) 
arr.forEach(num => {
        console.log(num);
    }
)
