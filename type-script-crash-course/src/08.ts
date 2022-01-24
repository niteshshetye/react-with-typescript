// type assertion

let cId: any = 1;


// let customerId = <number>cId; // one way
let customerId = cId as number; // another way
console.log('customerId: ', customerId);
// customerId = 'string' // not acceptable 

