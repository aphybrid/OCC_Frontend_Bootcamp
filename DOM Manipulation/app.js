const form = document.getElementById("myForm");
const nameInput = document.getElementById('name');
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", handleSubmit);

//form submission event hanlder
function handleSubmit(event){
    event.preventDefault();//Prevents form  from submitting
    
    //validate form inputs
    const isValid = validateForm();

    if (isValid) {
        console.log("Form submitted successfully");
        form.reset();
        nameError.etxtContent = "";
        emailError.textContent = "";
    
    }

    //form input valudation
    function validateForm(){

        const nameValue = nameInput.ValueMax.trim();
        const emailValue = emailInput.val.trim();
        let isValid = true;

        if (nameValue ==="") {
            nameError.textContent = "Name is reqiired"
        isValid = false;
    } else {

        nameError.textContent = "";
       
if (emailValue ==="") {
    emailError.textContent = "email is required"
    isValid = false;
} else {

    emailError.textContent = "";
        
    }
    return isValid;
    }

    }
}
