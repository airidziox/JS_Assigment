const loggeduser = document.querySelector('.loggeduser > span');
const loggedEmail = localStorage.getItem("userEmail")
loggeduser.innerHTML = `<b>${loggedEmail}</b>`

const userImage = localStorage.getItem("userImage")
const userPassword = localStorage.getItem("userPassword")

const image = document.querySelector('.user-image > img');
const email = document.querySelector('.email > span');
const changeImg = document.querySelector('.change-image');
const imgInput = document.querySelector('.img-link');
const passBox = document.querySelector('.password-box');
const changePass = document.querySelector('.change-pass');
const alert = document.querySelector('.alert');
const topAlert = document.querySelector('.top-alert');

image.src = userImage;
email.innerText = loggedEmail;
passBox.style.display = "none";
alert.style.display = "none";
topAlert.style.display = "none";

changeImg.onclick = () => {
    if (imgInput.value !== "") {
    localStorage.setItem("userImage", imgInput.value);
    location.reload();
    }
}

changePass.onclick = () => {
    changePass.style.display = "none";
    passBox.style.display = "block";
}

const currentPass = document.querySelector('.current-pass');
const newPass = document.querySelector('.new-pass');
const confirmPass = document.querySelector('.confirm-pass');
const changePassNew = document.querySelector('.change-pass-new');

changePassNew.onclick = () => {
    let success = true

    //// CURRENT
    if (currentPass.value === "") {
        success = false
        setError("Please insert current password")
        currentPass.classList.add("error")
        return;
    }
    else if (currentPass.value !== userPassword) {
        success = false
        setError("Current password is invalid")
        currentPass.classList.add("error")
        return;
    }
    else {
        currentPass.classList.remove("error")
        currentPass.classList.add("success")
    }

    //// NEW
    if (newPass.value === "") {
        success = false
        setError("Please insert new password")
        newPass.classList.add("error")
        return;
    }
    else if (newPass.value.length < 4 || newPass.value.length > 20) {
        success = false
        setError("New password must be at least 4-20 characters long")
        newPass.classList.add("error")
        return;
    }
    else {
        newPass.classList.remove("error")
        newPass.classList.add("success")
    }

    //// CONFIRM
    if (confirmPass.value !== newPass.value) {
        success = false
        setError("Please confirm password")
        confirmPass.classList.add("error")
        return;
    }
    else {
        confirmPass.classList.remove("error")
        confirmPass.classList.add("success")
        newPass.classList.remove("error")
        newPass.classList.add("success")
    }

    if (success) {
        localStorage.setItem("userPassword", newPass.value)
        topAlert.style.display = "block"
        topAlert.classList.add("bg-success")
        topAlert.innerText = "Password changed successfully!"
        changePass.style.display = "block";
        passBox.style.display = "none";
        setTimeout( () => {
            location.reload()
        }, 1500);
    }
}

function setError(message) {
    alert.innerHTML = message
    alert.style.display = "block"
}

