function checkPassword() {

    let password = document.getElementById("password").value;

    if(password === "01012023"){

        document.getElementById("message").innerHTML =
        "💖 Correct Password!";

    }

    else{

        document.getElementById("message").innerHTML =
        "❌ Wrong Password";

    }

}
