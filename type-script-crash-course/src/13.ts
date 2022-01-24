/*
        Interface                                 Type
    way to write interface                  way to write type

    extend in interface                     extend in type

    adding new field to an                  A type cannot be changed 
    existing interface posible              after being created



*/

// interface
interface Somthing{
    name: string;
    age: number;
    other: object;
    hobbies: string[]
}

// type
type SomeoneWithString = string
type SomeoneWithNumber = number
type SomeoneWithArray = string[]
type SomeoneWithBoolean = boolean
type SomeoneWithUnion = string | number
type SomeoneWithTypeAliase = "first Value" | "Second Value"



// interface extends
interface Animal {
    name: string
}

interface Bear extends Animal {
    honey: boolean
}

// type extends
type AnimalUsingType = {
    name: string
}

type BearUsingType = AnimalUsingType & { 
    honey: boolean 
}


// interface with same name to add another fields
interface WindowUsingInterface {
    title: string
}

interface WindowUsingInterface {
    ts: number
}
  
// type with same name to add another fields
// type WindowUsingType = {
//     title: string
// }

// type WindowUsingType = {
//     ts: number
// }