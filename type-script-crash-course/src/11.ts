// Classes

// class Person{
//     id: number // public by default not necessary to write public here
//     // private id: number // only access in this class and not outside
//     // protected id: number // only access in this class and class which extends this class
//     name: string

//     constructor(id: number, name: string){
//         this.id = id;
//         this.name = name
//     }
// }

// const person1 = new Person(1, 'nitesh shetye')
// const person2 = new Person(2, 'manish patil')

// console.log(person1.id)

// console.log(person1)
// console.log(person2)


/*
    Implement the interface in Class

    note we use implements keyword while applying the interface
    in class
*/
interface PersonInterface{
    id: number
    name: string
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

    register(){
        return `${this.name} is now register user, In Microsoft`
        // return 2
    }
}

const person1 = new Person(Date.now(), 'Nitesh shetye')
// console.log(person1)
// console.log(person1.register())


// subclasses
class Employee extends Person{
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name);
        this.position= position
    }


    getEmployee(){
        return `${this.name} is working as ${this.position}`
    }
}

const employee1 = new Employee(Date.now(), 'Adit shirodkar', 'FullStack Web Devloper');

console.log(employee1.register())
console.log(employee1.getEmployee())