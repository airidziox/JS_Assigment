const loggeduser = document.querySelector('.loggeduser > span');
const loggedEmail = localStorage.getItem("userEmail")
loggeduser.innerHTML = `<b>${loggedEmail}</b>`

const chatBox = document.querySelector('.chat-box');
const message = document.querySelector('.message');
const sendBtn = document.querySelector('.send');

let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let seconds = date.getSeconds();

setInterval(() => {
    date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    seconds = date.getSeconds();
    if (min < 10) {
        min = '0' + min;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
}, 1000);

sendBtn.onclick = () => {
    if (message.value !== "") {
            chatBox.innerHTML += `
        <div class="message-box bg-primary rounded-2 text-white p-2">
            <div style="font-size: 12px">${hour}:${min}:${seconds}</div>
            <div>${message.value}</div>
        </div>
    `
        message.value = ""
    }
}

