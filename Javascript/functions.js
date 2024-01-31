function greet () {
console.log ("Welcome to fucntions");
}

greet();
    
    //fucntio declarations

    function declaration () {
        console.log("This is fuction declaration");
        
    }

    declaration();

    //fuctniojn express

    const expression = function() {
        console.log ("this is a functiom epression");
    }

    expression();

    //parameter
    function greet(name) {
        console.log('Hello,', name + "!")

    }

    greet("Regel")

    //fuction with return
    function sum(a, b) {
        return a+b;
    }

    console.log(sum(5,6));

    let result = sum(7,5)
    console.log(result)

    //scope
    let globalVar = "I am a global variable";

    function localScope() {
        let localVar = "I am a  local variable";
        console.log(localVar);
        console.log(globalVar);
    }

    localScope();

    console.log(globalVar);

    function calculate(operation, num1, num2){
        return operation(num1, num2)
    }

    function add (a,b) {
        return a + b;
    }

    function subtract(a,b){
        return a - b;
    }

    let Sum = calculate (add, 6,7);
    let Difference = calculate (subtract, 6,7)

    console.log(`Result of addition: ${Sum}`)
    console.log(`Result of subtraction:${Difference}`)


