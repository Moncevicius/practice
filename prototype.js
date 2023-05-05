/**
 *  EASY Exercises
 *
 *  Exercise 1
 *  Create a new object using a constructor function and add a property to its prototype.
 */

function Exercise1(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

Exercise1.prototype.city = "Telsiai";
const one = new Exercise1("Mantas", "Moncevicius");

console.log(`${one.name} ${one.lastName} ${one.city}`);

/**
 *  Exercise 2
 *  Create a new object using object literal notation and add a method to its prototype.
 */

let exercise2 = {
    name: "Mantas",
    lastName: "Moncevicius"
}

exercise2.getFullName = function(){
    console.log(`${this.name} ${this.lastName}`);
}

exercise2.getFullName();

/**
 *  Exercise 3
 *  Create a new object using the Object.create() method and add a property to its prototype.
 */

const exercise3 = Object.create({
    name: "Mantas",
    lastName: "Moncevicius"
})

exercise3.city = "Telsiai";
console.log(`${exercise3.name} ${exercise3.lastName} ${exercise3.city}`)

/**
 *  Exercise 4
 *  Create a constructor function that sets a property on the instance and a method on the prototype.
 */

function Exercise4(){
    this.name = "Mantas"
}

Exercise4.prototype.getName = function (){
    console.log(this.name)
}
const four = new Exercise4();
four.getName()

/**
 *  Exercise 5
 *  Create an object using object literal notation and add a property to it.
 */

const exercise5 = {
    name: "Mantas"
}

exercise5.lastName = "Moncevicius";
console.log(exercise5.lastName)

/**
 *  Exercise 6
 *  Create a function that takes an object as an argument and returns its type using Object.prototype.toString().
 */

function getPrototype(object){
    console.log(Object.prototype.toString.call(object));
}

getPrototype(exercise3);

/**
 * Exercise 7
 * Create a constructor function that sets a property on the instance.
 */

function Exercise7(){
    this.name = "Mantas"
}
const seven = new Exercise7();
console.log(seven.name)

/**
 * Exercise 8
 * Create a method on the Array prototype that returns the first element of the array.
 */

const exercise8 = [1, 2];
Array.prototype.getFirstElement = function (){
    if(this.length > 0){
        console.log(this[0])
    } else {
        console.log(-1)
    }
}
exercise8.getFirstElement()

/**
 * Exercise 9
 * Create a method on the String prototype that returns the last character of the string.
 */

const exercise9 = "Testing"
String.prototype.lastCharacter = function (){
    console.log(this[this.length-1])
}
exercise9.lastCharacter()

/**
 * Exercise 10
 * Create a method on the Date prototype that returns the day of the week as a string.
 */

const exercise10 = new Date();
Date.prototype.getDayOfTheWeek = function (){
    switch (this.getDay()){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Sunday");
            break;
    }
}
exercise10.getDayOfTheWeek()

/**
 * Exercise 11
 * Create a method on the Number prototype that returns the absolute value of the number.
 */

const exercise11 = -100;
Number.prototype.getAbsolute = function (){
    console.log(Math.abs(this));
}
exercise11.getAbsolute()

/**
 * Exercise 12
 * Create a method on the Boolean prototype that returns the opposite value of the boolean.
 */

const exercise12 = false;
Boolean.prototype.getOposite = function (){
    if(this.valueOf() === true){
        console.log(false)
    } else {
        console.log(true)
    }
}
exercise12.getOposite()

/**
 * Exercise 13
 * Create a method on the Object prototype that returns the number of properties on the object.
 */

const exercise13 = {
    name: "Mantas",
    lastName: "Moncevicius",
    city: "Telsiai"
}
Object.prototype.getNumberOfProperties = function (){
    console.log(Object.keys(this).length)
}
exercise13.getNumberOfProperties()

/**
 * Exercise 14
 * Add a method to the String prototype that returns the string reversed.
 */

const exercise14 = "Mantas";
String.prototype.getReverseString = function (){
    console.log(this.split("").reverse().join(""))
}
exercise14.getReverseString()

/**
 * Exercise 15
 * Add a method to the Number prototype that returns true if the number is even, false otherwise.
 */
const exercise15 = 3;
Number.prototype.isEven = function (){
    if(this % 2 === 0){
        console.log(true)
    } else {
        console.log(false)
    }
}
exercise15.isEven()

