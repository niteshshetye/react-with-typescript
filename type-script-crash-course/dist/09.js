"use strict";
// Functions
// if we return the string then :string
function addNumReturnString(x, y) {
    return `'${x + y}' is the sum of two numbers`;
}
const sumS = addNumReturnString(2, 3);
console.log(sumS);
// if we return the number then :number
function addNumReturnNumber(x, y) {
    return x + y;
}
const sumN = addNumReturnNumber(2, 3);
console.log('sum of two number is: ', sumN);
// if we not return anything from the functions then :void
function logName(message) {
    console.log(message);
}
logName('I am the example of void');
