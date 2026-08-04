function checkPassword() {

    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (password === "01012023") {
        message.style.color = "green";
        message.textContent = "💖 Correct Password!";
    } else {
        message.style.color = "red";
        message.textContent = "❌ Wrong Password!";
    }

}
