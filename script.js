//your JS code here. If required.
// Create HTML elements
document.body.innerHTML = `
  <h1>Login Form</h1>

  <form id="form">
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

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Show existing user button if data exists
window.onload = function () {
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existingBtn.style.display = "block";
  }
};

// Submit login form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const user = username.value;
  const pass = password.value;

  alert("Logged in as " + user);

  if (checkbox.checked) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    existingBtn.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    existingBtn.style.display = "none";
  }
});

// Login as existing user
existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");

  alert("Logged in as " + savedUser);
});