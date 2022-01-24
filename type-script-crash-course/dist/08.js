"use strict";
// type assertion
let cId = 1;
// let customerId = <number>cId; // one way
let customerId = cId; // another way
console.log('customerId: ', customerId);
// customerId = 'string' // not acceptable 
