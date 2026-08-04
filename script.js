
function checkPassword() {
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (password === "01012023") {
        message.innerHTML = "💖 Welcome! Opening your surprise...";
    } else {
        message.innerHTML = "💔 Wrong password, try again!";
    }
}
