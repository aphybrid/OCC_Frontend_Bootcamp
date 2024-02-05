// accessing elements
//by id

//const heading = document.getElementById('heading');

//by class
//const heading = document.getElementsByClassName('heading1')

//by tag name
const heading = document.getElementsByTagName('h1');

console.log(heading[0]);

const listItems = document.querySelectorAll('#list li');

console.log(listItems);

//modifying Elements
//contents using innerHTML
heading[0].innerHTML = '<em>Learning DOM Manipulation</em>';

//content using textContentt
//heading[0].textContent = 'All about DOM Manipulation';

//attributes usiung setAttribute
heading[1].setAttribute('class', 'highlight');

//styles using StyleProperty
const button = document.getElementById('btn');
button.style.backgroundColor = 'skyblue';
button.style.border = 'blue 5px solid';

//creatingelements dynamically
const divContainer = document.getElementsByClassName('container');
const newParagraph = document.createElement('p');
newParagraph.textContent ='This is a new paragraph.';
divContainer[0].appendChild(newParagraph);

//remove elements dynamically
//divContainer[0].remove();
//button.remove();

//handling event
button.addEventListener('click', addListItem);

function addListItem() {
    const newListItem = document.createElement('li');
    newListItem.textContent = "New List Item";
  
    document.getElementById('list').appendChild(newListItem);   
}

window.addEventListener('keydown',addAnotherItem);
    
function addAnotherItem(event) {
    console.log('Pressed a',event.keyCode)

}


//focument object model

// Click Event: Triggered when an element is clicked.
// Mouseover Event: Occurs when the mouse pointer is moved over an element.
// Keydown Event: Fired when a key is pressed down.
// Submit Event: Triggered when a form is submitted.
// Load Event: Occurs when a page or an element has finished loading.
// Change Event: Fired when the value of an input element changes.
// Focus and Blur Events: These happen when an element gains or loses focus.


//Here are the common ones

//Mouse Events:
//click, dblclick, mousemove

//Keyboard Events:
//keydown, keyup, keypress

//Form Events:
//submit, reset, change

