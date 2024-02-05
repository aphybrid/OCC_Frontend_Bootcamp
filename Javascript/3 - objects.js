//Objects

const person =  {
    //object properties
    firstName:'Jane',
    lastName: 'Doe',
    age:25, 
    hobbies: ['readinbg', 'coding', 'hiking'],

    //Object Methods

    greet: function(){
        console.log('Hello, my name is', this.firstName, this.lastName, 'Nice to meet you.')
}
};
//Access Object Properties
console.log(person.firstName);
console.log(person.age);

//modifying Object Properties
person.lastName = 'Smith'
console.log(person.lastName);

//Accessing Object Methods
person.greet();

//Adding new properties to the object
person.nationality = 'American';
console.log(person.nationality);

//adding new methods to the object
person.introduce = function () {
    //Template literal
    console.log(`I am ${this.firstName} ${this.lastName}. I am ${this.age} years old`)

}
person.introduce();

//Nesting Object

const address = {
    street: '123 Main Street',
    city: 'New York',
    country: 'USA'
};

person.address1 =  address;

console.log(person.address1.street);

//Object destuctioning

const {firstName, lastName, age} = person;
console.log(age);

const bunny = {
    name1:'Mallows',
    color: 'white',
    age: '3',

    hop: function () {
console.log (`${this.name} is hopping around happily`);
    },
    eat:function () {
        console.log(`${this.name} is eating a carrot`);
    }
}

bunny.age++;

console.log(bunny.age)