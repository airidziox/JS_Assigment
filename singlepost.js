const loggeduser = document.querySelector('.loggeduser > span');
const loggedEmail = localStorage.getItem("userEmail")
loggeduser.innerHTML = `<b>${loggedEmail}</b>`

const singlePost = document.querySelector('.singlepost');
const postId = localStorage.getItem("post_id");

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
.then(res => res.json())
.then(data => {
        singlePost.innerHTML += `
        <div class="card m-3 post p-3" id="${data.id}">
            <div class="title"><b>${data.title}</b></div>
            <div class="body">${data.body}</div>
        </div>
        <a href="index.html"><button class="btn m-3 btn-dark mt-3">Return Home</button></a>
        `
})
