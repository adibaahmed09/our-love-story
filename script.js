function checkPassword() {

    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (password === "01012023") {

        message.innerHTML = "💖 Correct Password!";

    } else {

        message.innerHTML = "💔 Wrong Password!";

    }

}
