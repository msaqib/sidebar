const hamb = document.querySelector('.hamburger')
const navBar = document.querySelector('.nav-bar')
hamb.addEventListener('click', () => {
    navBar.classList.toggle('active')
    hamb.classList.toggle('rotate90')
})