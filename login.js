const usernameField = document.getElementById("Username");
const passwordField = document.getElementById("Password");

function login() {
    if (usernameField.value === "") {
        // TODO
    } else {
        localStorage.setItem("username", usernameField.value);
        window.location.href = 'home.html';
        console.log("Login");
    }
}
