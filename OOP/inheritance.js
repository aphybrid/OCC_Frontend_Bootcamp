//Inheritance 

    class Animal {
        constructor(name) {
            this.name = name
        }

        eat() {
                console.log(`${this.name} is eating!`);
        }
    }

    class Dog extends Animal {
        bark () {
            console.log ('woof woff');
        }
    }
    const myDog = new Dog ("Blue");
        myDog.eat();
        myDog.bark();

    