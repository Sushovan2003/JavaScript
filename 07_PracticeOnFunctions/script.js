//! BMI Calculator
console.log("Let's calculate bmi");
function bmiCal(weight, height) {
    return weight / (height * height);
}
//? height : 1.75 meters, toFixed(2) will give 2 numbers after decimal point
console.log(bmiCal(77, 1.75).toFixed(2)); // 25.14

//! Discount Calculator
console.log("Enter your amount and see discounted amount...");
// Assume dis is in percentage
function discountCal(dis) {
    return function (price) {
        console.log(price - (price * (dis / 100)));
    }
}
let discounter = discountCal(15) // giving 15% discount
discounter(299) // discount on 299rs. -> 254.15
console.log(`hi`);
discountCal(10)(1200) // discount 10% on 1200rs. -> 1080

//! IIFE (Immediately Invoked Function Expression)
(function() {
    const pass = `sushovan!123`;
    console.log(`Secret Password: ${pass}`);
})();