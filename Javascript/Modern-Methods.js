//ARrow Fucntions

/*function greet(name) {
    //code blank
    }*/

    const greet = (name) => {
        console.log(name);
    }

    greet('John');

    const square = (a) => a * a;
    console.log(square(5));

    //Enhanced Object Lieterals
    const person = {
        name:'TJ',
        age: 21,

        greeting() {
            return 'Good Evening'
        }
    }

    console.log(person.greeting());

    //Spread and Rest Operators
    //Rest

    function myFunction(firstArg, ...restOfArgs) {
        console.log(firstArg);
        console.log(restOfArg);
    }

    myFunction ('one','two','three','four');

//Spread
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1,2,3];
console.log(sum(...numbers));

//JS Built-in Methods

//ARray Methods
//Filter

let nums = [1,2,3,4,5,6,7,8,9,10];

const even= nums.filter((number) => number % 2 == 0);
console.log(even);

const odd = nums.filter((number) => number % 2 !== 0);
console.log(odd);

// String Methods
// Split
const message = "Hello, World!";
const words = message.split(', ');
console.log(words);

// Includes
const sentence = "The quick brown fox jumps over the lazy dog.";
const containsWord = sentence.includes('Fox');
console.log(containsWord);

// Length
const sampleString = "Welcome to Modern JS Features!";
console.log(sampleString.length);

//Object Methods
const person1 = {
    name:'John',
    age:30,
    city:'New York'
    }

//Keys
    console.log(Object.keys(person1));

//Values
    console.log(Object.values(person1));

    console.log(person1);
//Math Methods
//Max and Min
const maxNumber = Math.max(10,5,20);
console.log(maxNumber); 

const minNum=Math.min(10,5,30);
console.log(minNum);

//random
const randomValue = Math.random();
console.log(randomValue);

//rounding
const roundedNumber = Math.round(3.6);
console.log(roundedNumber);

//floor
const roundedFloor = Math.floor(3.6);
console.log(roundedFloor);

//Ceil
const roundedCeil = Math.ceil(3.2);
console.log(roundedCeil);


//Nested Maths Methods
const randomNum = Math.floor(math.random()*100);
console.log(randomNum);

//repeat - copied from Reg

// max and min
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);

const minNum = Math.min(10,5,30);
console.log(minNum);

// random
const randomValue = Math.random();
console.log(randomValue);

// rounding
const roundedNumber = Math.round(3.6);
console.log(roundedNumber);

// floor
const roundedFloor = Math.floor(3.6);
console.log(roundedFloor);

// ceil
const roundedCeil = Math.ceil(3.2);
console.log(roundedCeil)

// Nested Math Methods
const randomNum = Math.round(Math.random() * 10);
console.log(randomNum);

//Other Methods (back to me
//toFixed

const pt = 3.141592;
console.log(pi.toFixed(3));

//Date

const currentDate = new Date();
console.log(currentDate);

const christmas = new Date(2024, 12, 25);
console.log(christmas);

//toString
const num = 38;
const parsedString = num.toString();

console.log(parsedString + 1);

//Copy from Regal
// Other Methods
// toFixed

const pi = 3.141592;
console.log(pi.toFixed(3));

// date
// const currentDate = new Date();
// console.log(currentDate);

// const christmas = new Date(2023, 11, 25);
// console.log(christmas);

// toString
const num = 38;
const parsedString = num.toString();
console.log(parsedString + 1);