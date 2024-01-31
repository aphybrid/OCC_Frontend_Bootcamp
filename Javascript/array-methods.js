//Array Array Methods

//Creating an array
let superhero = ['SpiderGwen','Dr Strange','Hulk','Iron Man','Harley Quinn'];

console.log('Hero 1:', superhero[0]);
console.log('Hero 4:', superhero[3]);
console.log('Last hero:', superhero[superhero.length-1]);

//modifying array
superhero[1] = 'Wonder Woman';
console.log(superhero);

superhero.push('Batman');
console.log(superhero);

superhero.pop();
console.log(superhero);

// Array Iteration

for(let i=0; i < superhero.length; i++) {
    console.log('The Hero is:', superhero[i]);
}

superhero.forEach(function(hero) {
    console.log (hero);

})
//array methods
console.log("Array length:", superhero.length);

//
console.log ("Index of a value:", superhero.indexOf ('Hulk'));

//includes
console.log("Includes a value:", superhero.includes ('Iron Man'));

//join
console.log("Joined Array:", superhero.join(' - '));

//slice
let slicedArray = superhero.slice(1,4);
console.log("Slice array:", slicedArray);
console.log(superhero);


//splice
let removedElements = superhero.splice(2, 3);
console.log('Removed Elements',removedElements);
console.log(superhero);
