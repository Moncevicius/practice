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

/**
 * Exercise 16
 *
 *  Create a constructor function for a Car object that has a make property and a method drive() that logs
 *  a message to the console.
 */

function Car(make){
    this.make = make
    this.drive = function (){
        console.log(`Driving ${this.make}`)
    }
}
const exercise16 = new Car("BMW")
exercise16.drive()

/**
 * Exercise 17
 * Create a constructor function for a Cat object that has a name property and a method meow()
 * that logs a message to the console.
 */

function Cat(name){
    this.name = name;
    this.meow = function (){
        console.log(`Cats name is ${this.name} and he is meeeooowing`)
    }
}
const exercise17 = new Cat("Gucci")
exercise17.meow()

/**
 * Exercise 18
 * Add a method to the Array prototype that returns the last element of the array.
 */

const exercise18 = [1, 2, 3]
Array.prototype.getLastElement = function (){
    console.log(this[this.length-1])
}
exercise18.getLastElement()

/**
 * Exercise 19
 * Add a method to the Date prototype that returns the current year.
 */

const exercise19 = new Date();
Date.prototype.getCurrentYear = function (){
    console.log(this.getFullYear())
}
exercise19.getCurrentYear()

/**
 * MEDIUM Exercises
 * Exercise 20
 * Create a constructor function for a Person object that has firstName and lastName properties
 * and a method getFullName() that returns the full name.
 */

function Person(name, lastName){
    this.name = name;
    this.lastName = lastName;
    this.getFullName = function (){
        console.log(`${this.name} ${this.lastName}`)
    }
}
const exercise20 = new Person("Mantas", "Moncevicius");
exercise20.getFullName()

/**
 * Exercise 21
 * Create a constructor function for a BankAccount object that has a balance property and methods deposit(amount)
 * and withdraw(amount) that update the balance.
 */

function BankAccount(balance){
    this.balance = balance;
    this.deposit = function (amount){
        this.balance += amount;
    }
    this.withdraw = function (amount){
        this.balance -= amount;
    }
}
const exercise21 = new BankAccount(100);
console.log(exercise21.balance)
exercise21.deposit(100)
console.log(exercise21.balance)
exercise21.withdraw(50)
console.log(exercise21.balance)

/**
 * Exercise 22
 * Create a constructor function for a User object that has username and email properties and a method sendEmail()
 * that sends an email to the user.
 */

function User(username, email){
    this.username = username;
    this.email = email;
    this.sendEmail = function (){
        console.log(`Sending mail to ${this.username} ${this.email}`)
    }
}
const exercise22 = new User("Mantelo", "monce@gmail.com")
exercise22.sendEmail()

/**
 * Exercise 23
 * Create a constructor function for a Student object that has name, age, and grades properties and methods
 * getAverageGrade() and getMaxGrade() that return the average and maximum grade, respectively.
 */

function Student(name, age, grades){
    this.name = name;
    this.age = age;
    this.grades = grades;
    this.getAverageGrade = function (){
        console.log(this.grades.reduce((sum, grade) => (sum + grade)) / grades.length);
    }
    this.getMaxGrade = function (){
        console.log(Math.max(...this.grades));
    }
}

const exercise23 = new Student("Mantas", 32, [9, 8, 6, 10]);
exercise23.getAverageGrade();
exercise23.getMaxGrade();

/**
 * Exercise 24
 * Add a method to the Array prototype that shuffles the elements in the array.
 */

const exercise24 = [10, 9, 8, 7];
Array.prototype.shuffle = function (){
    return this.sort(() => (Math.random() > .5) ? 1 : -1)
}
console.log(Array.prototype.shuffle(exercise24))

/**
 * Exercise 25
 * Create a constructor function for a Timer object that has startTime and endTime properties and a method
 * getDuration() that returns the duration in seconds.
 */

function Timer(startTime, endTime){
    this.startTime = startTime;
    this.endTime = endTime;
    this.getDuration = function (){
        console.log(this.endTime - this.startTime)
    }
}
const startTime = new Date().getTime()
const endTime = setTimeout(() =>{
    new Date().getTime()
}, "100")
const exercise25 = new Timer(startTime, endTime)
exercise25.getDuration()

/**
 * Exercise 26
 * Create a constructor function for a Playlist object that has name and tracks properties and methods addTrack(track)
 * and removeTrack(track) that add and remove tracks from the playlist, respectively.
 */

function Playlist(name, tracks){
    this.name = name;
    this.tracks = tracks;
    this.addTrack = function (track){
        this.tracks.push(track)
    }
    this.removeTrack = function (track){
        const index = this.tracks.indexOf(track);
        this.tracks.splice(index, index)
    }
}

const exercise26 = new Playlist("Mantas Playlist", ["Song 1", "Song 2", "Song 3"])
console.log(exercise26.tracks)
exercise26.addTrack("Song 4")
console.log(exercise26.tracks)
exercise26.removeTrack("Song 2")
console.log(exercise26.tracks)

/**
 * Exercise 27
 * Create a constructor function for a Dog object that has breed and age properties and a method bark()
 * that logs a message to the console.
 */

function Dog(breed, age){
    this.breed = breed;
    this.age = age;
    this.bark = function (){
        console.log("Dog is barking")
    }
}

const exercise27 = new Dog("Bulldog", 8)
exercise27.bark()

/**
 * Exercise 28
 * Create a constructor function for a Man object that has properties name and age, and a method greet()
 * that logs a greeting to the console.
 */

function Man(name, age){
    this.name = name;
    this.age = age;
    this.greet = function (){
        console.log(`Greetings ${this.name}`)
    }
}
const exercise28 = new Man("Mantas", 32)
exercise28.greet()

/**
 * Exercise 29
 * Create a method on the Date prototype that returns the month as a string.
 */
Date.prototype.getMonthString = function (){
    switch (this.getMonth()){
        case 1:
            return "January"
        case 2:
            return "February"
        case 3:
            return "March"
        case 4:
            return "April"
        case 5:
            return "May"
        case 6:
            return "June"
        case 7:
            return "July"
        case 8:
            return "August"
        case 9:
            return "September"
        case 10:
            return "October"
        case 11:
            return "November"
        case 12:
            return "December"
        default:
            return "Invalid Month"
    }
}
const exercise29 = new Date();
console.log(exercise29.getMonthString())

/**
 * Exercise 30
 * Create a method on the Boolean prototype that returns whether the boolean is truthy or falsy.
 */

Boolean.prototype.isTruthyOrFalsy = function (bool){
    if(bool === true){
        return "Is Truthy"
    } else {
        return "Is Falsy"
    }
}
const exercise30 = true;
console.log(Boolean.prototype.isTruthyOrFalsy(exercise30));

/**
 * HARD
 * Exercise 31
 * Create a constructor function for a Bank object that has accounts property and methods createAccount() and
 * closeAccount() that create and close accounts, respectively.
 */

function Bank(accounts){
    this.accounts = accounts;
    this.createAccount = function (addition){
        this.accounts.push(addition)
    }
    this.closeAccount = function (){
        Object.freeze(this.accounts)
    }
}
const exercise31 = new Bank([
    {account: 1}, {account: 2}
])
// add additional account
exercise31.createAccount({account: 3})
console.log(exercise31.accounts)
// close accounts
// exercise31.closeAccount()
// exercise31.createAccount({account: 4})

/**
 * Exercise 32
 * Create a constructor function for a Calculator object that has methods add(), subtract(), multiply(), and divide()
 * that perform arithmetic operations.
 */

function Calculator(){
    this.result = 0;
    this.add = function (num){
        this.result += num;
    }
    this.subtract = function (num){
        this.result -= num;
    }
    this.multiply = function (num){
        this.result *= num;
    }
    this.divide = function (num){
        this.result /= num;
    }
}
const exercise32 = new Calculator();
//add
exercise32.add(2)
console.log(exercise32.result)
//subtract
exercise32.subtract(1)
console.log(exercise32.result)
//multiply
exercise32.multiply(2)
console.log(exercise32.result)
//divide
exercise32.divide(0.5)
console.log(exercise32.result)

/**
 * Exercise 33
 * Create a constructor function for a Deck object that has cards property and methods shuffle() and drawCard() that
 * shuffle the cards and draw a card from the deck, respectively.
 */

function Deck(cards){
    this.cards = cards;
    this.shuffle = function (){
        this.cards.shuffle()
    }
    this.draw = function (){
        console.log(this.cards[Math.floor(Math.random() * this.cards.length)])
    }
}
const exercise33 = new Deck(["Card 1", "Card 2", "Card 3", "Card 4"])
exercise33.shuffle()
console.log(exercise33.cards)
exercise33.draw()

/**
 * Exercise 34
 * Create a method on the Array prototype that sorts the array using a custom comparison function.
 */

Array.prototype.sortNumbers = function (){
    this.sort((a, b) => a - b)
}
const exercise34 = [2, 1, 4, 6, 8, 3, 7]
exercise34.sortNumbers()
console.log(exercise34)

/**
 * Exercise 35
 * Create a method on the String prototype that returns the number of occurrences of a given substring in the string.
 */

String.prototype.getOccurrencesOfSubstring = function (string){
    const regex = new RegExp(string, 'g');
    const matches = this.match(regex);
    if(!matches){
        return 0
    } else {
        return matches.length
    }

}

const exercise35 = "dog cat dog kangaroo monkey dog"
console.log(exercise35.getOccurrencesOfSubstring("dog"))