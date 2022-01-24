
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


/*
    remember one thing
    
    if you assign that the fullName is string in interface 
    and you actully not includ the fullName in the actuall object 
    then it gives and error to make it optional give ? after the key

    in below example email is optional as i write it like email?

    also you can set which key should read only like you cant change the
    value of that key after creating the object
*/

// Interfaces

interface UserInterface{
    readonly id: number
    fullName: string
    age: number
    email?: string
}

const student: UserInterface = {
    id: Date.now(),
    fullName: 'Nitesh shetye',
    age: 22,
    // email: 'nitesh@gmail.com'
}
// student.id = 34 // cant do this because id is readonly
console.log("student object using interfaces", student)


/*
    interfaces with function
    the myFunc will set a standard to addNumbers

    like now after setting this x:number, y: number and return number
    now i can set in addNumber x:string or else it gives me error
*/
interface myFunc{
    (x: number, y: number) : number
}

const addNumbers: myFunc = (x, y) => x + y
const subNumbers: myFunc = (x, y) => x - y

console.log('interface function: ', addNumbers(2, 3))
console.log('interface function: ', subNumbers(3, 2))