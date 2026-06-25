document.body.innerHTML = `
<h1>Login Form</h1>

<form id="form">

<label for="username">Username:</label>
<input type="text" id="username" placeholder="Username">

<br><br>

<label for="password">Password:</label>
<input type="password" id="password" placeholder="Password">

<br><br>

<input type="checkbox" id="checkbox">
<label for="checkbox">Remember me:</label>

<br><br>

<input type="submit" id="submit" value="Submit">

</form>

<br>

<button id="existing" style="display:none;">
Login as existing user
</button>
`;


const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");


// Show existing user button only if saved
if (localStorage.getItem("username")) {
    existing.style.display = "block";
}


// Login submit
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const user = username.value;
    const pass = password.value;

    alert("Logged in as " + user);

    if (checkbox.checked) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        existing.style.display = "block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existing.style.display = "none";
    }
});


// Existing user login
existing.addEventListener("click", function() {
    const savedUser = localStorage.getItem("username");

    alert("Logged in as " + savedUser);
});