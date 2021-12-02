// basic Types

let id: number = 5
let company: String = 'me dao'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number

// Array definition syntax (different than swift)
let ids: number[] = [1,2,3,4]

ids.push(23)

// arrays can contain multiple types
let arr: any[] = [1, true, 'Hello']

// the order does not matter
arr = [1, 'hello', false, 2, 4]


// tuple - order is fixed
let tuple: [number, string, boolean] = [1, 'Moogl', false]

// define tuple array like regular arrays
let tupleArray: [number, string][]

tupleArray = [
    [1,'string'],
    [2,'another'],
    [3,'a third!']
]

console.log(tupleArray)

for (let index = 0; index < tupleArray.length; index++) {
    const element = tupleArray[index];
    console.log(element)
}

// Union
let union: string | number = 22

union = 22
union = '22'

// Enum. By default each enum option is assigned a number value starting from 0. 
// if first option is assigned a value of 1 for example, then the second would become 2
 enum Direction1 {
    Up = 1,
    Down, 
    Left, 
    Right
 }


 console.log(Direction1.Up)
 console.log(Direction1.Left)


// If assigning non numeric value, then all options must have a value
 enum Direction2 {
    Up = 'Up',
    Down = 'Down', 
    Left = 'Left', 
    Right = 'Right'
 }


 // Basic object
 const object = {
    id: 1,
    name: 'John'
}

// object with defined types
 const user: {
     id: number,
     name: string
 } = {
     id: 1,
     name: 'John'
 }

 // that looks messy though ^. So we can instead define `types` (note: `interfaces` would probably be better though)
 type User = {
     id: number,
     name: string
 }

 // then when defining types of the object, the single type can be used
 const cleanUser: User = {
     id: 23,
     name: 'Cynthia'
 }


// Type Assertion - using <angle brackets>
let cid: any = 1
let customerId = <number>cid
// now customerId should be a number
console.log('customerId is ' + customerId)

// Type Assertion - using casting
let pid: any = 1
let productId = cid as string
// now productId should be a string
console.log('productID is ' + productId)


// Using Types in Functions

// unless we set `noImplicitAny` to `false` in the `tsconfig.json` file, then we must define types for function paramters
function  addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(1,2))

// functions can have void types
function log(message: string | number): void {
    console.log(message)
}