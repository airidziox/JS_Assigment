const loggeduser = document.querySelector('.loggeduser > span');
const loggedEmail = localStorage.getItem("userEmail")
loggeduser.innerHTML = `<b>${loggedEmail}</b>`

const postsDiv = document.querySelector('.posts');

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => {

    data.map(post => {
        postsDiv.innerHTML += `
        <div class="card post p-3" id="${post.id}">
            <div class="title"><b>${post.title}</b></div>
            <div class="body">${post.body}</div>
            <button class="btn viewpost btn-dark mt-3">View Post</button>
        </div>
        `
    })

    const viewPost = document.querySelectorAll('.viewpost')

    viewPost.forEach(item => {
        item.onclick = (event) => {
            const postId = event.target.parentNode.id
            localStorage.setItem("post_id", postId)
            window.location.href = "singlepost.html"
        }
    })
})

