/*
    Enum
    
    Enum is basically allow us to define the set of constants either a number
    or string
*/

enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
enum Direction2 {
    Up = 1,
    Down,
    Left,
    Right
}
enum Direction3 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log("Enum Direction1.Up: ", Direction1.Up)
console.log("Enum Direction2.Up: ", Direction2.Up)
console.log("Enum Direction3.Up: ", Direction3.Up)