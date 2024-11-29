const email = document.querySelector('.email');
const passwordOne = document.querySelector('.passwordOne');
const passwordTwo = document.querySelector('.passwordTwo');
const alert = document.querySelector('.alert');
const register = document.querySelector('.register');

alert.style.display = "none"

register.onclick = () => {
    let success = true
    let myUser = {
        email: email.value,
        passwordOne: passwordOne.value,
        passwordTwo: passwordTwo.value
    }

    //// EMAIL
    if (myUser.email === "") {
        success = false
        setError("Email is required")
        email.classList.add("error")
        return;
    }
    else if (!validateEmail(myUser.email)) {
        success = false
        setError("Please enter a valid email")
        email.classList.add("error")
        return;
    }
    else {
        email.classList.remove("error")
        email.classList.add("success")
    }

    //// PASSWORD
    if (myUser.passwordOne === "") {
        success = false
        setError ("Password is required")
        passwordOne.classList.add("error")
        return;
    }
    else if (myUser.passwordOne.length < 4 || myUser.passwordOne.length > 20 ) {
        success = false
        setError("Password must be at least 4-20 characters long")
        console.log(myUser.passwordOne)
        passwordOne.classList.add("error")
        return;
    }
    else {
        passwordOne.classList.remove("error")
        passwordOne.classList.add("success")
    }

    //// REPEAT PASSWORD
    if (myUser.passwordTwo === "") {
        success = false
        setError("Confirm password is required")
        passwordTwo.classList.add("error")
        return;
    }
    else if (myUser.passwordOne !== myUser.passwordTwo) {
        success = false
        setError("Passwords does not match")
        passwordOne.classList.add("error")
        passwordTwo.classList.add("error")
        return;

    }
    else {
        passwordOne.classList.remove("error")
        passwordOne.classList.add("success")
        passwordTwo.classList.remove("error")
        passwordTwo.classList.add("success")
    }

    if (success) {
        localStorage.setItem("userEmail", email.value)
        localStorage.setItem("userPassword", passwordOne.value)
        localStorage.setItem("userImage", "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg")
        window.location.href = "login.html"
    }
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function setError(message) {
    alert.innerHTML = message
    alert.style.display = "block"
}

