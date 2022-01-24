"use strict";
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now register user, In Microsoft`;
        // return 2
    }
}
const person1 = new Person(Date.now(), 'Nitesh shetye');
// console.log(person1)
// console.log(person1.register())
// subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
    getEmployee() {
        return `${this.name} is working as ${this.position}`;
    }
}
const employee1 = new Employee(Date.now(), 'Adit shirodkar', 'FullStack Web Devloper');
console.log(employee1.register());
console.log(employee1.getEmployee());
