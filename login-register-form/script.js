// Creating variables for all the id's
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

//Add the click function for the buttons
signinBtn.onclick = function() {
    // Hide the name field and the title
    nameField.style.maxHeight = "0";
    // Change the title
    title.innerHTML = "Sign In";
    // Change the buttons' color
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

}
//Add the click feature on the signup button
signupBtn.onclick = function() {
    // Hide the name field and the title
    nameField.style.maxHeight = "60px";
    // Change the title
    title.innerHTML = "Sign Up";
    // Change the buttons' color
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");

}