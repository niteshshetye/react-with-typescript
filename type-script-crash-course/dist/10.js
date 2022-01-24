"use strict";
/*
    As you understand after reading this that type and interface both have same
    use case but when use interface and when to use type is the question

    the ans is use
    "interface" for referance data-types and
    "type" for primitive data-types

    // type
    type Point = string | number
    const ageUsingType: Point = 22
    console.log("age using type: ", ageUsingType)
*/
const student = {
    id: Date.now(),
    fullName: 'Nitesh shetye',
    age: 22,
    // email: 'nitesh@gmail.com'
};
// student.id = 34 // cant do this because id is readonly
console.log("student object using interfaces", student);
const addNumbers = (x, y) => x + y;
const subNumbers = (x, y) => x - y;
console.log('interface function: ', addNumbers(2, 3));
console.log('interface function: ', subNumbers(3, 2));
