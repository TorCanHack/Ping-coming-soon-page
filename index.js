document.getElementById("btn").addEventListener('click', function(event) {
    //get the input element and the error element
    const email = document.querySelector(".email").value;
    const emailError = document.querySelector(".emailError");

    //clear the previous error messages 
    email.textContent = "";
    emailError.textContent = "";

    if (email === ""){
        emailError.textContent = "Email cannot be empty";
        emailError.style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".email").style.border = "1px solid hsl(0, 100%, 67%)";
        event.preventDefault();
    } else if (!validateEmail(email)){
        emailError.textContent = "Please provide a valid email";
        emailError.style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".email").style.border = "1px solid hsl(0, 100%, 67%)";
        event.preventDefault();
    }



});

function validateEmail(email) {
    //define the email patter
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailRegex.test(email);
}