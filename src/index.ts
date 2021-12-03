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

// Interfaces - like a custom type. or specific structure ot object or function. similar delcaration to types
// Interfaces do not use the assignment operator `=`
// Interfaces can have optional and readonly properties
interface animal {
    breed: string,
    readonly happy: boolean,
    age?: number
}

const wipple: animal = {
    breed: 'tuxedo',
    happy: true
}

// so what is the difference between interface and type then?
// Type can be used with primitives and unions, interfaces cannot.

type Life = string | number
const meaningOf: Life = '42'

// in general, if using objects, most people choose interfaces


// Can use interfaces with functions
interface MathFunc {
    (x: number, y: number): number
}

// now both of these can use the same interface (similar to swift protocols?)
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes (which were introduced to JS in ES6). used to create multiple objects. They have constructors (similar to swift init)
// private means it can only be access by the class
// protected means it can be accessed in this class or any sub class 
class Person {
    id: number
    protected name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
        console.log(this)
    }

    anotherMethod() {
        return `hi from a method inside ${this.name}`
    }
}

// to instantiate a new object from a class, use the `new` keyword
const michael = new Person(1, 'michael')
const madison = new Person(2, 'madison')

console.log(michael, madison)

// without access modifers (aka data modifers), objects properties are public and can be changed
michael.id = 5

console.log(michael.anotherMethod())


// can also implement an interface to this class. woah.
interface AnimalInterface {
    id: number
    name: string
    favoriteSound(): string
}


class Animal implements AnimalInterface {
    id: number
    name: string
    favoriteSound(): string {
        return "meowww"
    }

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    
}

const wopple: Animal = {
    id: 33,
    name: "wopple",
    favoriteSound(): string {
        return "moooow"
    }
}


// can also extend classes. OH this is called a Subclass, even though it's extending. 
// It's annoying we have to re-write the constructor for all other parameters too though. 
// well super() slightly solves this, but still annoying to define the parameters

class Dog extends Animal {
    species: string   

    favoriteSound(): string {
        return "bork"
    }

 constructor(id: number, name: string, species: string) {
    super(id, name)
    this.species = species
 }
}

const oliver = new Dog(3, 'Oliver', 'Dog')

console.log(oliver.favoriteSound)

// use any (to build reusuable flexible components)
function getArray(items: any[]): any[] {
    return new Array().concat(items)
}

// now use this function to create an array of numbers and an array of strings

let arrayNum = getArray([1,2,3])
// but since, any – 
arrayNum.push('3')

let arrayStr = getArray(['flexible','any','but'])
arrayStr.push('not as safe as generics')

function printGenericArray(arrayOfArrays: any[]): void {
    
    arrayOfArrays.forEach(array => {
        console.log(array)
    });
}
printGenericArray([arrayNum,arrayStr])


// using generics, (basically type placeholder)

function getGenericArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

// when calling the funciton, it's basically like passing an argument for the type. 
let numArray = getGenericArray<number>([1,2,3,4])
let strArray = getGenericArray<string>(['flexible', 'generic','elegance','and safer than any'])

// so now it's not possible to push a str to the numArray
numArray.push(23) // but numbers are allowed
strArray.push('string') // str only accepts strings