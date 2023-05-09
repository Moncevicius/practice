/**
 * Class exercises
 *
 * EASY
 * Exercise 1
 * Create a class called Person with properties name and age, and a method greet() that logs a greeting to the console.
 */

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello ${this.name} !`)
    }
}

/**
 * Exercise 2
 * Create an instance of the Person class and call the greet() method.
 */

const exercise2 = new Person("Mantas", 32)
exercise2.greet()

/**
 * Exercise 3
 * Create a class called Car with properties make, model, and year, and a method getDescription() that returns
 * a string describing the car.
 */

class Car{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDescription(){
        return `Car is ${this.make} ${this.model} made in ${this.year}`
    }
}

/**
 * Exercise 4
 * Create an instance of the Car class and call the getDescription() method.
 */

const exercise4 = new Car("BMW", "Series 3", 2012)
console.log(exercise4.getDescription())

/**
 * Exercise 5
 * Create a class called Animal with properties name and species, and a method makeSound() that logs a sound
 * to the console.
 */

class Animal{
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound(){
        console.log(`${this.name} makes sound`)
    }
}

/**
 * Exercise 6
 * Create an instance of the Animal class and call the makeSound() method.
 */

const exercise6 = new Animal("Dog", "Bulldog")
exercise6.makeSound()

/**
 * Exercise 7
 * Create a class called Rectangle with properties width and height, and a method getArea() that
 * returns the area of the rectangle.
 */

class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height
    }

    getArea(){
        return this.width * this.height
    }
}

/**
 * Exercise 8
 * Create an instance of the Rectangle class and call the getArea() method.
 */

const exercise8 = new Rectangle(3, 4)
console.log(exercise8.getArea())

/**
 * Exercise 9
 * Create a class called Circle with a radius property and methods getArea() and getCircumference() that return
 * the area and circumference of the circle, respectively.
 */

class Circle{
    constructor(radius) {
        this.radius = radius;
    }

    getArea(){
        return Math.PI * this.radius
    }

    getCircumference(){
        return 2 * this.getArea()
    }
}

/**
 * Exercise 10
 * Create an instance of the Circle class and call the getArea() and getCircumference() methods.
 */

const exercise10 = new Circle(6)
console.log(exercise10.getArea())
console.log(exercise10.getCircumference())

/**
 * Exercise 11
 * Create a Student class that inherits from Person and has a property grade.
 */

class Student extends Person{
    constructor(name, age,grade) {
        super(name, age);
        this.grade = grade;
    }
}
const exercise11 = new Student("Mantas", 32, "Graduate")
console.log(exercise11.name)
console.log(exercise11.age)
console.log(exercise11.grade)

/**
 * Exercise 12
 * Create a Teacher class that inherits from Person and has a property subject.
 */

class Teacher extends Person{
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject
    }
}

const exercise12 = new Teacher("Mithi", 42, "Computing Science")
console.log(exercise12.name)
console.log(exercise12.age)
console.log(exercise12.subject)

/**
 * Exercise 13
 * Create a BankAccount class with properties balance and interestRate.
 */

class BankAccount{
    constructor(balance, interestRate) {
        this.balance = balance;
        this.interestRate = interestRate
    }
}

const exercise13 = new BankAccount(1000, 1.2)
console.log(exercise13.balance)
console.log(exercise13.interestRate)

/**
 * Exercise 14
 * Create a class called Book with properties title and author, and a method getDescription() that
 * returns a string describing the book.
 */

class Book{
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getDescription(){
        return `The book ${this.title} by ${this.author} is great!`
    }
}

/**
 * Exercise 15
 * Create an instance of the Book class and call the getDescription() method.
 */

const exercise15 = new Book("10 Rules for Life", "Jordan B Peterson")
console.log(exercise15.getDescription())

/**
 * Exercise 16
 * Create a class called Employee with properties name and salary, and a method getAnnualSalary() that returns the
 * annual salary of the employee.
 */

class Employee{
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getAnnualSalary(){
        return `Employee ${this.name} gets annual salary of ${this.salary * 12}`
    }
}

/**
 * Exercise 17
 * Create an instance of the Employee class and call the getAnnualSalary() method.
 */

const exercise17 = new Employee("Mantas", "1000")
console.log(exercise17.getAnnualSalary())

/**
 * Exercise 18
 * Create a class called Playlist with a property songs that is an array of Song objects, where each song has
 * properties title and artist. Add a method to the Playlist class to add a song to the playlist.
 */

class Song{
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
}

class Playlist{
    constructor() {
        this.songs = [];
    }

    addSong(title, artist){
        const song = new Song(title, artist)
        this.songs.push(song)
    }
}

/**
 * Exercise 19
 * Create an instance of the Playlist class and call the method to add a song to the playlist.
 */

const exercise19 = new Playlist();
exercise19.addSong("TOP HITS", "Various Artists")
exercise19.addSong("Staying alive", "ABBA")
console.log(exercise19.songs)

/**
 * Exercise 20
 * Create a Dog class with properties name and breed, and a method bark() that logs a bark to the console.
 */

class Dog{
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    bark(){
        return `${this.name} is barking!! Aggressive ${this.breed}`
    }
}

const exercise20 = new Dog("Lota", "Rottweiler")
console.log(exercise20.bark())