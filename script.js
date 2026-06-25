// Get elements
const form = document.createElement("form");
form.id = "form";

document.body.innerHTML = `
<h1>Login Form</h1>

<form id="login-form">
  <input type="text" id="username" placeholder="Username">
  <br><br>

  <input type="password" id="password" placeholder="Password">
  <br><br>

  <input type="checkbox" id="checkbox">
  <label for="checkbox">Remember me.</label>

  <br><br>

  <input type="submit" id="submit" value="Submit">
</form>

<br>

<button id="existing" style="display:none;">
Login as existing user
</button>
`;

const loginForm = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submit = document.getElementById("submit");
const existing = document.getElementById("existing");


// Check saved user on page load
window.onload = function () {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername) {
    existing.style.display = "block";
  }
};


// Submit login
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

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
existing.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");

  alert("Logged in as " + savedUser);
});