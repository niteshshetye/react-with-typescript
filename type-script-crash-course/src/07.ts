// OBJECTS

// one way
// let user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'Nitesh Shetye'
// }

// another way
type User = {
    id: number,
    name: string
} 

let user: User= {
    id: 1,
    name: 'Nitesh Shetye'
}

console.log("User object: ", user)