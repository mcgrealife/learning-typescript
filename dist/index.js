"use strict";
// basic Types
let id = 5;
let company = 'me dao';
let isPublished = true;
let x = 'Hello';
let age;
// Array definition syntax (different than swift)
let ids = [1, 2, 3, 4];
ids.push(23);
// arrays can contain multiple types
let arr = [1, true, 'Hello'];
// the order does not matter
arr = [1, 'hello', false, 2, 4];
// tuple - order is fixed
let tuple = [1, 'Moogl', false];
// define tuple array like regular arrays
let tupleArray;
tupleArray = [
    [1, 'string'],
    [2, 'another'],
    [3, 'a third!']
];
console.log(tupleArray);
for (let index = 0; index < tupleArray.length; index++) {
    const element = tupleArray[index];
    console.log(element);
}
// Union
let union = 22;
union = 22;
union = '22';
// Enum. By default each enum option is assigned a number value starting from 0. 
// if first option is assigned a value of 1 for example, then the second would become 2
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Left);
// If assigning non numeric value, then all options must have a value
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// Basic object
const object = {
    id: 1,
    name: 'John'
};
// object with defined types
const user = {
    id: 1,
    name: 'John'
};
// then when defining types of the object, the single type can be used
const cleanUser = {
    id: 23,
    name: 'Cynthia'
};
// Type Assertion - using <angle brackets>
let cid = 1;
let customerId = cid;
// now customerId should be a number
console.log('customerId is ' + customerId);
// Type Assertion - using casting
let pid = 1;
let productId = cid;
// now productId should be a string
console.log('productID is ' + productId);
// Using Types in Functions
// unless we set `noImplicitAny` to `false` in the `tsconfig.json` file, then we must define types for function paramters
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// functions can have void types
function log(message) {
    console.log(message);
}
const wipple = {
    breed: 'tuxedo',
    happy: true
};
const meaningOf = '42';
// now both of these can use the same interface (similar to swift protocols?)
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes (which were introduced to JS in ES6). used to create multiple objects. They have constructors (similar to swift init)
// private means it can only be access by the class
// protected means it can be accessed in this class or any sub class 
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(this);
    }
    anotherMethod() {
        return `hi from a method inside ${this.name}`;
    }
}
// to instantiate a new object from a class, use the `new` keyword
const michael = new Person(1, 'michael');
const madison = new Person(2, 'madison');
console.log(michael, madison);
// without access modifers (aka data modifers), objects properties are public and can be changed
michael.id = 5;
console.log(michael.anotherMethod());
class Animal {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    favoriteSound() {
        return "meowww";
    }
}
const wopple = {
    id: 33,
    name: "wopple",
    favoriteSound() {
        return "moooow";
    }
};
// can also extend classes. OH this is called a Subclass, even though it's extending. 
// It's annoying we have to re-write the constructor for all other parameters too though. 
// well super() slightly solves this, but still annoying to define the parameters
class Dog extends Animal {
    constructor(id, name, species) {
        super(id, name);
        this.species = species;
    }
    favoriteSound() {
        return "bork";
    }
}
const oliver = new Dog(3, 'Oliver', 'Dog');
console.log(oliver.favoriteSound);
// generics (to build reusuable flexible components)
function getArray(items) {
    return new Array().concat(items);
}
// now use this function to create an array of numbers and an array of strings
let arrayNum = getArray([1, 2, 3]);
let arrayStr = getArray(['flexible', 'generic', 'elegance']);
function printGenericArray(arrayOfArrays) {
    arrayOfArrays.forEach(array => {
        console.log(array);
    });
}
printGenericArray([arrayNum, arrayStr]);
