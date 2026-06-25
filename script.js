document.body.innerHTML = `
<h1>Login Form</h1>

<form id="form">
<input type="text" id="username" placeholder="Username">
<br><br>

<input type="password" id="password" placeholder="Password">
<br><br>

<input type="checkbox" id="checkbox">
<label>Remember me.</label>

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


if (localStorage.getItem("username")) {
    existing.style.display = "block";
}


form.addEventListener("submit", function(e){
    e.preventDefault();

    let user = username.value;
    let pass = password.value;

    alert("Logged in as " + user);

    if(checkbox.checked){
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        existing.style.display = "block";
    }
    else{
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existing.style.display = "none";
    }
});


existing.addEventListener("click", function(){

    let savedUser = localStorage.getItem("username");

    alert("Logged in as " + savedUser);

});