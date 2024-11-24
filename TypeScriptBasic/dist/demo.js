"use strict";
const firstname = "Ratchanon";
const lastname = "Decha";
const province = "Nakhon Ratchasima";
console.log(firstname + ' ' + lastname);
console.log(province);
// function greet(noun: string) {
//     console.log(`Hello, ${noun}!`)
//   }
//   greet('World') // Prints: Hello, World  
//   //greet(2020) // Argument of type 'number' is not assignable to parameter of type 'string'.
function greet(name) {
    console.log(`Hello, ${name || 'stranger'}!`);
}
greet("Ratchanon"); // Prints: Hello, stranger!
function exponentiation(power = 1) {
    console.log(4 ** power);
}
exponentiation(); // Prints: 4
exponentiation(4); // Prints: 256
//exponentiation(true); // Error: Argument of type 'true' is not assignable to parameter of type 'number | undefined'
function factOrFiction() {
    return Math.random() >= .5 ? true : false;
}
const myAnswer = factOrFiction(); // Type 'string' is not assignable to type 'boolean'
console.log(myAnswer);
function sayHello() {
    console.log('Hello!');
    function trueOrFalse(value) {
        if (value) {
            return true;
        }
        return false;
        // return false // Typescript Error: Type 'string' is not assignable to type 'boolean'.
    }
}
// zipcodes is an array of strings
// let zipcodes: string[] = ['03255', '02134', '08002', '03063']
// Pushing a number to zipcodes will generate an error
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
//zipcodes.push(90210)
// zipcodes.push('90210')
// zipcodes is an array of strings
// let zipcodes: Array<string> = ['03255', '02134', '08002', '03063']
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
//zipcodes.push(90210)
// zipcodes.push('90210')
// one-dimensional arrays
let zipcodesNH = ['03255', '03050', '03087', '03063'];
let zipcodesMA = ['02334', '01801'];
// two-dimensional array
let zipcodes = [zipcodesNH];
// Pushing a one-dimensional array to a two-dimensional array
zipcodes.push(zipcodesMA);
console.log(zipcodes); // prints [["03255", "03050", "03087", "03063"], ["02334", "01801"]]
// This is an array
let header = ['Name', 'Age', 'Smoking', 'Salary'];
// This is a tuple
let profile = ['Kobe', 39, true, 150000];
let answer; // any type
let typedAnswer; // union type
typedAnswer = 'hello';
typedAnswer = 20;
typedAnswer = true;
//typedAnswer = null
let myBoolean;
myBoolean = 'TRUE'; // string type
myBoolean = false; // boolean type
/////  
const choices = ['NO', 'YES'];
const processAnswer = (answer) => {
    if (typeof answer === 'number') {
        console.log(choices[answer]);
    }
    else if (typeof answer === 'boolean') {
        if (answer) {
            console.log(choices[1]);
        }
        else {
            console.log(choices[0]);
        }
    }
};
processAnswer(true); // Prints "YES"
processAnswer(0); // Prints "NO"
// let user: object = {
//   id: 1,
//   name: "Samit",
//   dateOfBirth: new Date("1982-11-10")
// };
// console.log(user)
// let song: object = {
//   name: "Brooklyn Boy",
//   artist: "Jeremy Zucker",
//   year: 2021
// }
// console.log(`Song: ${song.name}`)
// console.log(`Artist: ${song.artist}`)
// console.log(`Year: ${song.year}`)
// song.year = 2025
// console.log(`Changed year: ${song.year}`)
// type userType = {
//   id: number,
//   name: string,
//   dateOfBirth: Date
// }
// let user: userType = {
//   id: 1,
//   name: "Samit",
//   dateOfBirth: new Date("1982-11-10")
// }
// let country: object = {
//   name: "Thailand",
//   code: "TH",
//   population: 69950850
// }
// console.log(Object.keys(country))
// console.log(Object.values(country))
// console.log(Object.entries(country))
///
// class Rectangle {
//   width! :number
//   height!: number
//   area(): number {
//       return this.width * this.height
//   }
// }
// let rect: Rectangle = new Rectangle()
// rect.width = 3
// rect.height = 4
// console.log(`Area of rect: ${rect.area()}`)
// class Person {
//   firstName!: string
//   lastName!: string
//   occupation!: string
//   getName(): string {
//       return this.firstName + " " + this.lastName
//   }
//   getInfo(): string {
//       return `${this.getName()} is a ${this.occupation}.`
//   }
// }
// let p1: Person = new Person();
// p1.firstName = "Samit"
// p1.lastName = "Koyom"
// p1.occupation = "Programmer"
// let p2: Person = new Person();
// p2.firstName = "Robert"
// p2.lastName = "Williams"
// p2.occupation = "Singer"
// console.log(p1.getInfo())
// console.log(p2.getInfo())
//// 
class Rectangle {
    constructor(width, height) {
        console.log("constructor has been called.");
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
let rect1 = new Rectangle(3, 4);
let rect2 = new Rectangle(6, 5);
console.log(`Area of rect1: ${rect1.area()}`);
console.log(`Area of rect2: ${rect2.area()}`);
;
;
let point = {
    x: 1,
    y: 2
};
console.log(point);
