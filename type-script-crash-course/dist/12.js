"use strict";
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(['nitesh', 'manish', 'adit']);
console.log(numArray);
// numArray.push('i am sending the string'); // its not give me error even if i send the string in array of all numbers
// console.log(numArray);
/*
    Generics
    avoid this above issue we use generics
*/
function getArray1(items) {
    return new Array().concat(items);
}
let numArray1 = getArray1([1, 2, 3, 4]);
let stringArray1 = getArray1(['nitesh', 'manish', 'adit']);
console.log(numArray1);
// numArray1.push('i am sending the string'); // now its throw error if a try to push string in numbers specific array
// console.log(numArray1);
stringArray1.push('i am sending the string');
console.log(stringArray1);
