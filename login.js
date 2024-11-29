const email = document.querySelector('.email');
const password = document.querySelector('.password');
const alert = document.querySelector('.alert');
const login = document.querySelector('.login');

const registeredEmail = localStorage.getItem("userEmail")
const registeredPassword = localStorage.getItem("userPassword")

alert.style.display = "none"

login.onclick = () => {
    let success = true

    //// EMAIL
    if (email.value === "") {
        success = false
        setError("Email is required")
        email.classList.add("error")
        return;
    }
    else if (email.value !== registeredEmail) {
        success = false
        setError("User with that email does not exist")
        email.classList.add("error")
        return;
    }
    else if (email.value === registeredEmail) {
        email.classList.remove("error")
        email.classList.add("success")
    }

    //// PASSWORD
    if (password.value === "") {
        success = false
        setError("Password is required")
        password.classList.add("error")
        return;
    }
    else if (password.value !== registeredPassword) {
        success = false
        setError("The password is incorrect")
        password.classList.add("error")
        return;
    }
    else if (password.value === registeredPassword) {
        password.classList.remove("error")
        password.classList.add("success")
    }

    if (success) {
        localStorage.setItem("userEmail", email.value)
        localStorage.setItem("userPassword", password.value)
        window.location.href = "index.html"
    }

}

function setError(message) {
    alert.innerHTML = message
    alert.style.display = "block"
}