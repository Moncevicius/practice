/**
 * EASY
 * Exercise 1
 * Use the call method to invoke a function with a specific this value and arguments passed in as an array.
 */

function exercise1(name, lastName){
    console.log(`Hello ${name} ${lastName}, how you doing?`)
}

const person = {name: "Mantas", lastName: "Moncevicius"}
const array = ["Tomas", "Tomaitis"];

exercise1.call(person, ...array)

/**
 * Exercise 2
 * Use the apply method to invoke a function with a specific this value and arguments passed in as
 * individual arguments.
 */

function exercise2(name, age){
    console.log(`Hello ${name}, you are ${age} years old, aren't you?`)
}

const obj2 = {name: "Mantas", age: 32}
const name2 = "Mantas"
const age2 = 28;

exercise2.apply(obj2, [name2, age2])

/**
 * Exercise 3
 * Use the bind method to create a new function with a specific this value.
 */

function exercise3(name, age){
    console.log(`Hello ${this.name}, you are ${this.age} years old, aren't you?`)
}

const obj3 = {name: "Vilius", age: 21}
const bound3 = exercise3.bind(obj3)
bound3()

/**
 * Exercise 4
 * Use the call method to invoke a method of an object with a specific this value.
 */

const obj = {
    name: "Mantas",
    lastName: "Moncevicius",
    greet(){
        console.log(`Hello there ${this.name} ${this.lastName}`)
    }
}
const exercise4 = {
    name: "Julius",
    lastName: "Svirusis"
}

obj.greet.call(exercise4)

/**
 * Exercise 5
 * Use the apply method to invoke a method of an object with a specific this value.
 */

function Exercise6(name, lastName){
    this.name = name;
    this.lastName = lastName;
    this.greet = function (){
        console.log(`Hello Mr.${this.name} ${this.lastName}`)
    }
}

const exercise5 = new Exercise6("Mantas", "Monce")
const obj5 = {name: "Test", lastName: "Testing"}
exercise5.greet.apply(obj5)

/**
 * Exercise 6
 * Use the bind method to create a new function with a specific this value and pre-set arguments.
 */

function exercise6(greeting, ending){
    console.log(`${greeting} ${this.name} ${this.lastName} ${ending}`)
}

const obj6 = {name: "Mantas", lastName: "Moncevicius"}
const bound6 = exercise6.bind(obj6, "Hello", "and Goodbye!")
bound6()

/**
 * Exercise 7
 * Use the call method to invoke a function with null as this value.
 */

function exercise7(name, lastName){
    console.log(`Hello ${name} ${lastName}`)
}

exercise7.call(null, "Mantas", "Moncevicius")

/**
 * Exercise 8
 * Use the apply method to invoke a function with null as this value.
 */

function exercise8(name){
    console.log(`Hello ${name}`)
}
const array8 = ["Mantas"]
exercise8.apply(null, array8)

/**
 * Exercise 9
 * Use the bind method to create a new function with null as this value.
 */

function exercise9(){
    console.log(`Hello ${this.name}`)
}

const bound9 = exercise9.bind(null, "Mantas")

/**
 * Exercise 10
 * Use the call method to invoke a function with a specified this value and no arguments.
 */

function exercise10(){
    console.log(`Howdy ${this.name} ${this.lastName}`)
}
const obj10 = {
    name: "Mantas",
    lastName: "Moncevicius"
}

exercise10.call(obj10)

/**
 * Exercise 11
 * Use call to invoke a function with a specified this value.
 */

function exercise11(){
    console.log(`Heyyy ${this.name} ${this.lastName}`)
}

const obj11 = {
    name: "Mant",
    lastName: "Monc"
}

exercise11.call(obj11)

/**
 * Exercise 12
 * Use apply to invoke a function with a specified this value and an array of arguments.
 */

function exercise12(name, lastName, age){
    console.log(`Hello there ${name} ${lastName}, you are ${age} years old, ha!`)
}
const obj12 = {
    name: "Tomas",
    lastName: "Tomaitis",
    age: 42
}
const array12 = ["Mantas", "Moncevicius", 32]
exercise12.apply(obj12, array12)

/**
 * Exercise 13
 * Use bind to create a new function with a specified this value.
 */

function exercise13(){
    console.log(`Dog ${this.name} is barking! Woof Woof`)
}

const obj13 = {
    name: "Gucci"
}

const bound13 = exercise13.bind(obj13)
bound13()

/**
 * Exercise 14
 * Use call to invoke a method on an object with a specified this value.
 */

function exercise14(){
    console.log(`What are you saying ${this.name} ?`)
}

class Obj14{
    constructor(name) {
        this.name = name;
    }
}

const obj14 = new Obj14("Mantas")
exercise14.call(obj14)

/**
 * Exercise 15
 * Use apply to invoke a method on an object with a specified this value and an array of arguments.
 */

const obj15 = {
    getBreed: function (breed, age){
        console.log(`Breed is ${breed} ${age}`)
    }
}
const array15 = ["Rottweiler", 2]
obj15.getBreed.apply(null, array15)

/**
 * MEDIUM
 * Exercise 16
 * Use the call method to pass a variable number of arguments to a function.
 */

function exercise16(...args){
    const sum = args.reduce((sum, value) => sum + value)
    console.log(`Sum of numbers: ${sum}`)
}

exercise16.call(null, 7, 8, 9)

/**
 * Exercise 17
 * Use the apply method to pass a variable number of arguments to a function.
 */

function exercise17(){
    console.log(`Passed number arguments are: ${Array.from(arguments)}`)
}
const array17 = [2, 4, 6]
exercise17.apply(null, array17)

/**
 * Exercise 18
 * Use the bind method to create a new function with a specific this value and partially pre-set arguments.
 */

function exercise18(num, num2){
    console.log(num * num2)
}
const bound18 = exercise18.bind(null, 3)
bound18(2)

