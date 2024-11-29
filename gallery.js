const loggeduser = document.querySelector('.loggeduser > span');
const loggedEmail = localStorage.getItem("userEmail")
loggeduser.innerHTML = `<b>${loggedEmail}</b>`

const gallery = document.querySelector('.gallery')

fetch("https://api.escuelajs.co/api/v1/products")
.then(res => res.json())
.then(data => {
    console.log(data)
    data.map(product => {
        gallery.innerHTML += `
        <div class="card">
        <img class="rounded-1" src="${product.category.image}" alt="">
        </div>
        `
    })
})